angular.module('goodHelpApp')
       .controller('GoodHelpController', GoodHelpController);

function GoodHelpController($http, goodHelpService) {
  var controller = this;
  controller.reviews = [];

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

  // search for an organization
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
    $http.get('/orgs').then(function(response) {
      console.log('createProfile response', response);
      var i = 0;
      response.data.forEach(function() {
        var name = response.data[i].name;
        var address = response.data[i].address;
        var review = response.data[i].review;
        if(buttonClick.name === name && buttonClick.formatted_address === address) {
          controller.reviews.push(review);
          console.log('controller.reviews', controller.reviews);
        }
        // console.log('createProfile review:', response.data[i].review);
        i++;
      });
    });
  };

  // post review to mongo db
  controller.submitReview = function(review) {
    var name = controller.selectedProfile.name;
    var address = controller.selectedProfile.formatted_address;
    var id = controller.selectedProfile.id;
    console.log('submitReview name:', name);
    var data = {review: controller.review, name: name, address: address,
      id: id};
    console.log('review:', data);
    $http.post('/orgs', data);
    controller.review = '';
  }, function(error) {
    console.log('error posting request', error);
  };
}
