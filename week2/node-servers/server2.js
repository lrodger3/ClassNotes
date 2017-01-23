var http = require('http');
var port = 3000;

http.createServer((req, res)=>{
  
  console.log(`Server is getting a request at ${req.url}!`);
  
  if( req.url === '/' ){
    // Home Page
      res.writeHead(200, {"Content-Type" : "text/html"});
    res.end('<h1> Welcome to the home page </h1>');
  }
  else if (req.url === '/about') {
    // About Page
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.end('<h1> Welcome to the about page </h1>');
  }
  else if( req.url === '/newpage' ) {
    res.end('newpage!');
  }
  else {
    // Catch-all 404
    res.writeHead(404, {"Content-Type" : "text/html"});
    res.end('<h1>Access Denied...</h1>');
  }
  
}).listen(port);

// function(req, res){}
// (req, res)=>{}