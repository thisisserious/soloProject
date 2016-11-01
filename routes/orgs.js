const router = require('express').Router();
const Org = require('../models/organization');

router.get('/', function(req, res) {
  Org.find({}).then(function(dataFromTheDatabase) {
    console.log('Documents from mongo', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

module.exports = router;
