angular.module('goodHelpApp')
       .controller('GoodHelpController', GoodHelpController);

function GoodHelpController($http, goodHelpService) {
  var controller = this;

  // retrieve data from mongo db
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

  // search for an organzation
  controller.searchFor = function(searchTerm) {
    controller.searchTerm = '';
    goodHelpService.search(searchTerm)
    .then(function(results) {
      controller.searchedPlaces = results;
    });
  };

  // create an organization's profile
  controller.createProfile = function(buttonClick) {
    console.log('buttonClick', buttonClick);
    controller.selectedProfile = buttonClick;
    console.log('controller', controller);
  };

  // post review to mongo db
  controller.submitReview = function(review) {
    var name = controller.selectedProfile.name;
    var address = controller.selectedProfile.formatted_address;
    var id = controller.selectedProfile.id;
    console.log('submitReview name:', name);
    var data = {review: controller.review, name: name, address: address, id: id};
    console.log('review:', data);
    $http.post('/orgs', data);
    controller.review = '';
  };
}
