var express = require('express');
var PORT = process.env.PORT || 8080;

var app = express();

// Routes

function lumberjack (req, res, next){
  console.log('Timber!  I sleep all night and I work all day!');
  console.log('You are here : ', req.protocol, req.hostname, req.path);
  next();
}

function knockKnock(req, res, next) {
  // This function will check to see if we should let a user in
  
  // /secret/wizardstuff?wizardHandshake=supersecret
  if (req.query.wizardHandshake === 'supersecret') {
    // They're good, let them in
    next();
  } 
  else {
    // They're too happy, kick them out
    res.send('You Shall Not PAASSSSS!');
  }

}

// Vertically mounted middleware - every route below this app.use statement must go through this middleware first
// app.use((req, res, next) => {
//   console.log('I am middleware!');
//   req.rightNow = (new Date()).getTime();
//   next(); // continue to the next thing
// });

app.use(lumberjack);

app.get('/', (req, res) => {
  res.send('Grumpy Wizards make toxic brew for the Evil Queen and Jack');
});


app.get('/about', (req, res) => {
  res.send(`All about grumpy wizards... ${req.rightNow}`);
});


// KnockKnock mounted as HORIZONTAL middleware
app.get('/secret/wizardstuff', knockKnock, (req, res) => {

  // Only grumpy wizards should know this spell!
  res.json({
    spell: 'ØBamØ',
    elements: ['wind', 'eye of newt', 'wormwood']
  });

});


// Listen
app.listen(PORT, () => {
  console.log(`Sever running on ${PORT}`);
});

/*

CHALLENGE - Logging middleware

Write a middleware function that logs a message and the requested URL (look on the req object for this one)

Calls next()

This should run on ALL routes

function lumberjack (req, res, next){
  console.log('Timber!  I sleep all night and I work all day!');
  console.log('You are here : ', req.protocol, req.hostname, req.path);
  next();
}

*/











