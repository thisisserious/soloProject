const mongoose = require('mongoose');

exports.connect = function() {
    mongoose.connect('mongodb://localhost/goodHelp');

    var db = mongoose.connection;
    db.on('error', function(error) {
      console.log('error connection', error);
    });

    db.once('open', function() {
      console.log('connected to mongo');
    });
  };
