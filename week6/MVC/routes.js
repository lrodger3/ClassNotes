// Require controller files
var BarKeep = require('./controllers/barkeep');

// We register routes with methods like `app.get`, `app.post`, etc.  How do we get `app` into this file from server.js?

// This function will be called in `server.js` and it will pass in the `app` object
module.exports = (app) =>{
  
  app.get('/api/booze', BarKeep.read);
  app.get('/api/booze/bubbly', BarKeep.effOnly);
  // Creating a new booze document
  app.post('/api/booze', BarKeep.create);
  
//   app.get('/api/users', userCtrl.read);
//   app.post('/api/users', userCtrl.create);
 
  
  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });
  
}

