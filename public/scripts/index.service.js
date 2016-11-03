angular.module('goodHelpApp')
       .service('goodHelpService', GoodHelpService);

function GoodHelpService($http) {
  console.log('GoodHelpService loaded');
  var api = 'https://maps.googleapis.com/maps/api/place/details/json';
  var placeid = 'ChIJvbt3k5Azs1IRB-56L4TJn5M';
  var key = 'AIzaSyAvxVdxhDqyVuMMiiKEcoqBAva5BOguGKw';

  this.search = function() {
    return $http.get(api + '?placeid=' + placeid + '&key=' + key)
    .then(function(response) {
      console.log('Got response from API', response);
      return response.result.address_components.long_name;
    });
  };
}
