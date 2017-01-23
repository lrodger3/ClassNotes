var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;

var users = [
  {
    name : 'Alice'
  },
  {
    name : 'Carlos'
  },
  {
    name : 'Galadriel'
  }
];

var app = express(); // Create our express APP object

// app.use gets called on EVERY request type
app.use( bodyParser.json() );

// '{"name" : "Fernando"}'
// 'name=fern%20ando&page=2'

// Defining Routes
// we call methods on the app object - the method often correlates with an http request type
app.get('/', (req, res)=>{
  // console.log(req); // It's big!
  // This is our ROUTE HANDLER function
  
  // req is the REQUEST OBJECT - it contains data about the REQUEST
  
  // res is the RESPONSE OBJECT - it provides methods of sending down responses
  
//   res.send('Hello Squirrel!');
  
  res.sendFile('homepage.html', {root : './'});
  
  //res.send     // - send whatever you want
  //res.json     // - sending data
  //res.sendFile // - sending files
  
  // probably wont use too much
  //res.render   // - used for server-side templating
  //res.redirect // - used for redirecting to a new route
});

// button.addEventListener('click', function(){
// })


app.get('/about', (req, res)=>{
   res.send(' i like long walks on the beach ');
});

app.get('/data/users', (req, res)=>{
//   res.json(users); // send down the users array
//   res.sendFile("main.js", {root : './public/scripts/'})
});

app.post('/data/users', (req, res)=>{
  // create a new user and add to the users array
  console.log(req.body);
  users.push(req.body);
  res.send(users);
});

app.use((req, res)=>{
  res.send('GET OUT')
});

// Listen for connections
app.listen(PORT, ()=>{
  console.log(`Sever running on ${PORT}`);
});