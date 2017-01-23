angular.module('Kanye')
  .factory('API', apiFact);

apiFact.$inject = ['$http'];

function apiFact ($http) {
  
//   function getTest (){
//     return $http({
//       method : 'GET',
//       url : '/test'
//     })
//   }
  
  function getAlbum(albumName){
    
    return $http({
      method : 'GET',
      url : '/api/album',
      params : {
        albumName : albumName
      }
    })
    
  }
  
  return {
    getAlbum : getAlbum
//     getTest : getTest
  }
}              