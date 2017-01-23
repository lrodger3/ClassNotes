// First step - declare a module
// angular.module("NAME", []);

angular.module("SamuelLJackson", []); // Creating a module named 'SamuelLJackson' that has 0 dependencies

// angular.module('NAME') // retrieves an existing module. Notice it is missing the injector array

angular
  .module('SamuelLJackson')
  .controller('harveyKeitel', harveyController);

harveyController.$inject = ['$scope', '$timeout']; // The array of string names will always match your parameters below

function harveyController ($scope, $timeout){
 
  // $scope is the object that will expose data to the view
  $scope.greeting = "That's a tasty looking burger.";
  
  $scope.clean = function () {
    return 'Scrub a dub dub';
  }
  $scope.leopardPants = 'I wear leopard pants'
//   $timeout(function(){
//     $scope.greeting = "get outta here";
//   }, 4000);
  console.log('Hello Harvey', $scope);
 
  
}




