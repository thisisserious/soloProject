angular.module('goodHelpApp')
       .controller('ReviewController', ReviewController);

function ReviewController($uibModalInstance) {
  var rCtrl = this;

  rCtrl.close = function() {
    // location.reload();
    $uibModalInstance.close();
  };
}
