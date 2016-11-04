exports.authConfigs = {
  googleAuth: {
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    callbackURL: 'http://localhost:3000/auth/google/callback',
  },

  sessionVars: {
    secret: '',
  },
};

var User = require('../models/user');
exports.UserService = {
  findUserById: function(id, callback) {
    User.findById(id, function(err, user) {
      if (err) {
        return callback(err, null);
      }

      return callback(null, user);
    });
  },

  findUserByGoogleId: function(id, callback) {
    User.findOne({googleId: id}, function(err, user) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, user);
    });
  },

  createGoogleUser: function(id, token, name, email, callback) {
    var user = new User();

    user.googleId = id;
    user.googleToken = token;
    user.googleName = name;
    user.googleEmail = email;

    user.save(function(err) {
      if(err) {
        return callback(err, null);
      }
      return callback(null, user);
    });
  },
};
