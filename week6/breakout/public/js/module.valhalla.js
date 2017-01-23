angular.module('Valhalla', ['ngRoute'])
  .config(Router);

Router.$inject = ['$routeProvider', '$locationProvider'];

function Router ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl  : '/html/home.html',
      controller   : 'longHouse',
      controllerAs : 'lh'
    })
    .when('/signup', {
      templateUrl  : '/html/signup.html',
      controller   : 'longHouse',
      controllerAs : 'lh'
    })
    .when('/about', {
      templateUrl : 'html/about.html'
    })
}