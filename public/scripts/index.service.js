angular.module('goodHelpApp')
       .service('goodHelpService', GoodHelpService);

function GoodHelpService($http) {
  console.log('GoodHelpService loaded');
  var api = 'https://maps.googleapis.com/maps/api/place/details/json';
  var placeid = 'ChIJvbt3k5Azs1IRB-56L4TJn5M';
  var key = 'AIzaSyAvxVdxhDqyVuMMiiKEcoqBAva5BOguGKw';
}

// + '?placeid=' + placeid + '&key=' + key <-- concatenation
