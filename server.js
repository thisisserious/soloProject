const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./auth/passport');
const configs = require('.config/auth');
const connection = require('./connection');
const auth = require('./routes/auth');
const orgs = require('./routes/orgs');
const places = require('./routes/places');
const dotenv = require('dotenv');

const port = process.env.PORT || 3000;

connection.connect();
dotenv.config();
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(session({
  secret: configs.sessionVars.secret,
  key: 'user',
  resave: 'true',
  saveUninitialized: false,
  cookie: {maxage: 60000, secure: false},
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', auth);
app.use('/orgs', orgs);
app.use('/places', places);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(port, function() {
  console.log('Listening on port:', port);
});
