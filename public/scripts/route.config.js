angular.module('goodHelpApp')
       .config(function($routeProvider, $locationProvider) {
          $routeProvider.when('/home', {
            templateUrl: 'views/home.html'
          });
          $locationProvider.html5Mode(true);
        });
