const mongoose = require('mongoose');

const Org = mongoose.model('Org', {
  name: String,
  address: String,
  city: String,
  state: String,
  zip: Number
});

module.exports = Org;
