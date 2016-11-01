const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('./connection');
const orgs = require('./routes/orgs');

const port = process.env.PORT || 3000;

connection.connect();
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/orgs', orgs);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(port, function() {
  console.log('Listening on port:', port);
});
