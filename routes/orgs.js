const router = require('express').Router();
const Org = require('../models/organization');

// get documents from mongo db
router.get('/', function(req, res) {
  Org.find({}).then(function(dataFromTheDatabase) {
    console.log('Documents from mongo', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

// post documents to mongo db
router.post('/', function(req, res) {
  var review = req.body.review;
  console.log('post review:', review);
  var saveReview = new Org({review: review});
  console.log('saveReview:', saveReview);
  saveReview.save().then(function() {
    console.log('Saved a new review');
    res.sendStatus(201);
  });
});

module.exports = router;
