var http = require('http');
var path = require('path'); // helps deal with filepaths / locations / extensions
var fs   = require('fs'); // deals with file system
var port = 3000;

http.createServer((req, res)=>{
  
  //  First we need to know what kind of file they are requesting  
  var extension = path.extname(req.url);
  console.log(`File Extension : ${extension}`)
  
  switch(extension){
    case '.html' :
      console.log('Searching for HTML files...');
      
      fs.readFile(`./public/html/${req.url}`, (err, data)=>{
       if(err) {
         // send an error down
         res.writeHead(404);
         res.end('Nothing to see here')
       } 
       else{
         res.writeHead(200, {"Content-Type" : "text/html"});
         res.end(data);
       }
      })
      
     break
     
    case '.js' :
    fs.readFile(`./public/js/${req.url}`, (err, data)=>{
       if(err) {
         // send an error down
         res.writeHead(404);
         res.end('Nothing to see here')
       } 
       else{
         res.writeHead(200, {"Content-Type" : "text/javascript"});
         res.end(data);
       }
      })
     break
     
    case '.css' :
    fs.readFile(`./public/css/${req.url}`, (err, data)=>{
       if(err) {
         // send an error down
         res.writeHead(404);
         res.end('Nothing to see here')
       } 
       else{
         res.writeHead(200, {"Content-Type" : "text/css"});
         res.end(data);
       }
      })
     break
  }
  
}).listen(port)





