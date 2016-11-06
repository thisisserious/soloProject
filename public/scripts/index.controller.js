angular.module('goodHelpApp')
       .controller('GoodHelpController', GoodHelpController);

function GoodHelpController($http, goodHelpService) {
  console.log('GoodHelpController loaded');
  var controller = this;
  controller.org = [];

  controller.listOrg = function() {
    console.log('Listing organizations');
    $http.get('/orgs').then(function(response) {
      console.log('listOrg response', response);
      controller.org = response.data;
      console.log('controller.org', controller.org);
    }, function(error) {
      console.log('error making request', error);
    });
  };

  controller.searchFor = function(searchTerm) {
    console.log('Search term from index.html:', searchTerm);
    controller.searchTerm = '';

    goodHelpService.search(searchTerm)
    .then(function(results) {
      controller.searchedPlaces = results;
    });
  };

  controller.createProfile = function() {
    console.log('Profile button clicked');
    controller.forEach(function() {
      if()
    });
  };
}
