const mongoose = require('mongoose');

const Org = mongoose.model('business', {
  name: String,
  address: String,
  reviews: [String],
  googleID: String
});

module.exports = Org;
