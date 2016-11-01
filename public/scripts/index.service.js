angular.module('goodHelpApp')
       .service('goodHelpService', GoodHelpService);

function GoodHelpService() {
  console.log('GoodHelpService loaded');
}
