angular.module('MySuperTaterApp', ['ngRoute'])
  .controller('tater', Tater)

Tater.$inject = ['$scope', '$http', 'MyFactory']              
              
function Tater ($scope, $http, MyFactory) {
  // COMMENT
  $scope.greeting = 'Ch-Ch-Ch-Chia!'
  // COMMENT
  $http({
    // COMMENT
    url :'/api/taters',
    method : 'GET'
  }).then(function(responseData){
    console.log($http)
    $scope.stuff = responseData.data
  });
  
}              