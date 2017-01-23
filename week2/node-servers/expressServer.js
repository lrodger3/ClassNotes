/*

npm - node package manager

When starting a project, you'll first need to run the `npm init` command

`npm init` will create a file called package.json that keeps track of your node modules and their versions

Once it has been created, you can then `npm install` the node modules required by your project
 `npm install MODULE --save`

*/

var express = require('express'); // Pull in express
var port = process.env.PORT || 8080;

var app = express(); // Create an express app object

app.get('/', (req, res) =>{
  res.send('<h1> Welcome to the home page!</h1>');
})

// app.get('/about', (req, res) =>{
  
// })

app.use( express.static('public') ); // This would be our static file server


app.listen(port, ()=>{
  console.log(`Server running on ${port}!`);
});
