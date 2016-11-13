angular.module('goodHelpApp')
       .controller('ReviewController', ReviewController);

function ReviewController($http, $uibModalInstance, profile) {
  var rCtrl = this;
  rCtrl.reviews = [];
  console.log('ReviewController profile:', profile);

  // close the modal
  rCtrl.close = function() {
    // location.reload();
    $uibModalInstance.close();
  };

  // post review to mongo db
  rCtrl.submitReview = function(review) {
    console.log('rCtrl review:', review);
    // var name = profile.name;
    // var address = profile.formatted_address;
    // var googleID = profile.id;
    // console.log('submitReview name:', name);
    // var data = {review: review, name: name, address: address,
    //   googleID: googleID};
    // console.log('Modal review:', data);
    // $http.post('/orgs', data);
    // rCtrl.review = '';
    // rCtrl.close();
  }, function(error) {
    console.log('error posting request', error);
  };
}
