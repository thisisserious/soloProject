const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const config = require('../config/auth');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  UserService.findUserById(id, function(err, user) {
    if(err) {
      return done(err);
    }
    return done(null,user);
  });
});

passport.use('google', new GoogleStrategy({
  clientID: config.googleAuth.clientId,
  clientSecret: config.googleAuth.clientSecret,
  callbackURL: config.googleAuth.callbackUrl,
}, function(token, refreshToken, profile, done) {
  UserService.findUserByGoogleId(profile.id, function(err, user) {
    if (err) {
      return done(err);
    }
    if (user) {
      return done(null, user);
    }

    UserService.createGoogleUser(profile.id, token, profile.displayName,
    profile.emails[0].value,
    function(err, user) {
      if (err) {
        return done(err);
      }

      return done(null, user);
    });
  });
}));

module.exports = passport;
