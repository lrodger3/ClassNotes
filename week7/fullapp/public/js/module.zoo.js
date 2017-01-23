angular.module('Zoo', ['ngRoute'])
  .config(ngRouter)

ngRouter.$inject = ['$routeProvider', '$locationProvider'];

function ngRouter ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.otherwise('/');
  
  $routeProvider
    .when('/', {
      templateUrl : '/html/home.html',
      controller : 'homeCtrl',
      controllerAs : 'home'
    })
    .when('/login', {
      templateUrl : '/html/login.html',
      controller : 'homeCtrl',
      controllerAs : 'home'
    })
    .when('/dash', {
      templateUrl : '/html/dash.html',
      controller : 'dashCtrl',
      controllerAs : 'dash'
    })
  
}