var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = process.env.PORT || 8080,
    Router = require('./routes'),
    app = express();


// Mount Middleware
app.use( 
  express.static('public'),
  bodyParser.json(), 
  bodyParser.urlencoded({extended : true}), 
  morgan('dev') 
);

// Routes!
Router(app); // Pass the express app object as an argument


// Listen for connections
app.listen(port, ()=>{
  console.log(`Server Up and Runnin on ${port}`);
});