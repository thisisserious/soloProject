const router = require('express').Router();
const Org = require('../models/organization');

// get documents from mongo db
router.get('/', function(req, res) {
  Org.find({}).then(function(dataFromTheDatabase) {
    console.log('Documents from mongo', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

// post documents to mongo db; create document if not present & add review;
// add review to existing document if already present
router.post('/', function(req, res) {
  console.log('about to create new review');
  var review = req.body.review;
  var name = req.body.name;
  var address = req.body.address;
  var googleID = req.body.googleID;
  Org.findOne({name: name, address: address,
    googleID: googleID}).then(function(org) {
      if(!org) {
        var org = new Org({name: name, address: address, googleID: googleID,
          reviews: [{}]});
      }
      org.reviews.push(review);
      return org.save().then(function(org) {
        console.log('Saved a new review', org);
        res.sendStatus(201);
      });
    }).catch(function(err) {
    console.log('Error saving review', err);
    res.sendStatus(500);
  });
});

// router.put('/', function(req, res) {
//   var review = [];
//   var tasks = req.body.review.tasks;
//   var timeUsedWisely = req.body.review.timeUsedWisely;
//   console.log('put request tasks:', tasks);
//   console.log('put request timeUsedWisely', timeUsedWisely);
//   review.push(tasks, timeUsedWisely);
//   console.log('put request review array:', review);
//   res.send(review);
// });

module.exports = router;
