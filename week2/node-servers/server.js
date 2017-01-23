/*


DNS => mapping the domain names to IP addresses

Web Request Life Cycle : 
1. Browser makes an HTTP request
2. (If Domain name) DNS lookup to find IP address of server the request is being sent to
3. Server receives the request at a given port

4. Application running on the server does something with the request
5. Server packages up a response (html, js, css files / JSON data / XML data / plain text)
6. Server sends the response back down to the browser

Every time a request is made, there __MUST__ be a response

Even more simplified
1. Send Request to server
2. Server receives request / handles
3. Send Response to browser
4. Browser receives response / handles


MIME
    image/jpg
    image/png
    video/mp4
    video/mov
    application/json
    octet-stream
    text/html
    text/css
    text/javascript
    

*/

var http = require('http');  // This is a CORE node module, there is no need to use npm to install it and we can reference it by name

http.createServer( function(req, res){
  // req is the request object - it contains info about the request the server will be handling
  // res is the response object - it contains methods to allow you to send responses to the client
  
  res.writeHead(200, {
    "Content-Type" : "text/plain", // Describes to the browser what kind of content (MIME types) we are sending down
    "Some-Dumb-Header" : "IdontKnow"
  });
  res.end("Hello Squirrel!"); //Sends the response and attaches 'hello squirrel' as the response body
  
}).listen(3000);









