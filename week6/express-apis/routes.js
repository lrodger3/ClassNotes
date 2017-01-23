// Require controller files
var API = require('./controllers/api');

module.exports = (app) =>{
  
  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });
  
//   app.get('/test', (req, res)=>{
//     res.send('its working!');
//   });
  
  app.get('/api/album', API.album);
  
}

//     Client ==REQ==> Server ==REQ==> API
//     Client ==REQ==> Server ==REQ==> DB
// 
//     Client <RES===  Server  <RES===   API/DB
