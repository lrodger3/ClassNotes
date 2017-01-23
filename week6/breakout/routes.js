var Vikings = require('./controllers/vikingCtrl');

module.exports = (app) =>{
 
  app.get('/', (req, res)=>{
   res.sendFile('index.html', {root : './public/html'});
 });
 
  app.get('/api/vikings', Vikings.get); // Get Many
  app.get('/api/vikings/:id', Vikings.get); // Get One
  app.post('/api/vikings', Vikings.create);

}

