angular.module('goodHelpApp')
       .config(function($routeProvider, $locationProvider) {
          $routeProvider.when('/home', {
            templateUrl: 'views/home.html'
          }).when('/register', {
            templateUrl: 'views/register.html'
          }).when('/search', {
            templateUrl: 'views/search.html'
          }).otherwise('/home', {
            templateUrl: 'views/home.html'
          });
          $locationProvider.html5Mode(true);
        });
