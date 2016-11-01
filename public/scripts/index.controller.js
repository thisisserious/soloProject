angular.module('goodHelpApp')
       .controller('GoodHelpController', GoodHelpController);

function GoodHelpController($http) {
  console.log('GoodHelpController loaded');
  var controller = this;
  controller.org = [];

  controller.listOrg = function() {
    console.log('Listing organizations');
    $http.get('/orgs').then(function(response) {
      console.log('response', response);
      controller.org = response.data;
    }, function(error) {
      console.log('error making request', error);
    });
  };

  controller.addOrg = function() {
    var data = {org: controller.org};
    $http.post('/orgs', data).then(function(response) {
      console.log('response', response);
    });
  };
}
