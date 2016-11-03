const router = require('express').Router();
const request = require('request');

router.get('/', function(req, res) {
  var api = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
  var key = 'AIzaSyAvxVdxhDqyVuMMiiKEcoqBAva5BOguGKw';
  request(api + '?query=' + req.query.query + '&key=' + key,
  function(error, response, body) {
    res.send(body);
  });
});

module.exports = router;
