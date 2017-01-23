angular.module('Zoo')
  .factory('Exhibits', Exhibits);
   
Exhibits.$inject = ["$http"];           
           
function Exhibits ($http) {
  
  
 return {
   
   get : function(){
     return $http.get('/api/exhibits')
   }
 } 
}