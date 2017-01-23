var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

// Mount Middleware
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());
//--------------------------------


// Routes
app.get('/', (req, res)=>{
  res.send('<h1>Cookies/Sessions!</h1>')
});


// Setting Cookies
app.get('/givecookie', (req, res)=>{
  res.cookie("oatmeal-raisin", "nom nom nom", {
    httpOnly : true, // make inaccessible to JS
    maxAge : 15000   // temporary
  });
  res.cookie("nightMode", "true");
  
  res.send('Cookie was set');
});

// Working with Sessions
var sessions = {};

app.get('/session', (req, res)=>{
  
  if(!req.cookies.meatLoaf || !sessions[req.cookies.meatLoaf]){
    //  Tell it to set a cookie if we DON'T know who they are
    var meatLoafID = Math.random();
    res.cookie("meatLoaf", meatLoafID, {httpOnly : true});
    sessions[meatLoafID] = { created : Date.now() };

    res.send(`You joined our site at ${sessions[meatLoafID].created}`)
  }
  else{
    //  If we DO know who they are, send them a welcome message
    
    res.send(`Welcome back!  You've been a member since ${sessions[req.cookies.meatLoaf].created}`);
  }
});


//--------------------------------

// Listen for connections
var PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
  console.log(`Server Running on ${PORT}`);
});