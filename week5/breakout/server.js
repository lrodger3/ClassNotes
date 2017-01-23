var express = require('express'),
    PORT    = process.env.PORT || 8080,
    app = express();

app.use( express.static('public') ); // Name our static file server folder

// app.get('/', (req, res)=>{
//   res.send('Hello world!');
// });

app.listen(PORT, (err) =>{
  
  if(err){
    console.log('Oh no!', err);
    return process.exit(0)
  }
  
  console.log(`Server up and running on ${PORT}`);
  
});