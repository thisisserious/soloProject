angular.module('goodHelpApp')
       .service('goodHelpService', GoodHelpService);

function GoodHelpService($http) {
  console.log('GoodHelpService loaded');
  var api = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
  var key = 'AIzaSyAvxVdxhDqyVuMMiiKEcoqBAva5BOguGKw';

  this.search = function(query) {
    return $http.get('/places?query=' + query)
    .then(function(response) {
      console.log('Got response from API', response);
      return response.data.results;
    });
  };
}
