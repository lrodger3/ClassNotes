var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    sessions = require('express-session'),
    Routes = require('./routes');

require('./config/passport'); // include our own passport config
mongoose.connect('mongodb://localhost/crap')
var sessionMiddleware = sessions({
    secret : "keyboard cat",
    resave : false, // resave the cookie even if it doesn't change
    saveUninitialized : true // save an empty session / cookie for EVERY user that comes to the site
});
    
var app = express();

app.use(
    bodyParser.json(),
    bodyParser.urlencoded({extended : true}),
    sessionMiddleware,
    passport.initialize(), // This gives it access to our app
    passport.session(), // gives passport access to our sessions
    express.static('public')
);

Routes(app);

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server runnin on ${process.env.PORT || 3000} ${process.env.IP}`);
});

