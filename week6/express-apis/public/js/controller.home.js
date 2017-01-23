angular.module('Kanye')
  .controller('Home', homeCtrl);

homeCtrl.$inject = ['API'];

function homeCtrl (API) {
  var home = this;
  
  home.welcome = "Hello world!";
  home.getThatAlbum = function(){
    
    API.getAlbum(home.albumInput)
      .then(function(resp){
        console.log('Album time : ', resp.data)
        home.album = resp.data.result;
      });
    
  }
//   home.testRequest = function(){
//     API.getTest()
//       .then(function(resp){
//         console.log('FROM SERVER : ', resp)
//       });
//   }
}              