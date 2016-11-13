const mongoose = require('mongoose');

const Org = mongoose.model('business', {
  name: String,
  address: String,
  reviews: [{}],
  googleID: String
});

module.exports = Org;
