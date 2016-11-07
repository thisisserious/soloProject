angular.module('goodHelpApp')
       .controller('GoodHelpController', GoodHelpController);

function GoodHelpController($http, goodHelpService) {
  console.log('GoodHelpController loaded');
  var controller = this;

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

  controller.createProfile = function(buttonClick) {
    console.log('buttonClick', buttonClick);
    console.log('controller', controller);
    var searchedPlaces = controller.searchedPlaces;
    console.log('searchedPlaces:', searchedPlaces);
    var i = 0;
    searchedPlaces.forEach(function(id) {
      i++;
      var id = controller.searchedPlaces[i].id;
      // var name = controller.searchedPlaces[i].name;
      // console.log('id:', id);
      // console.log('name', name);
      if (id === buttonClick) {
        var name = controller.searchedPlaces[i].name;
        console.log('selected name:', name);
        return name;
      }
    });
  };
}
