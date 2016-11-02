const mongoose = require('mongoose');

const Org = mongoose.model('business', {
  name: String,
  address: String,
  city: String,
  state: String,
  zip: Number,
  review: String
});

module.exports = Org;
