# Request terminology

## Components of a URL
protocol - http/https
hostname - google.com, localhost, 164.876.33.41
tld      - .com, .net, .org
path     - /api/song
querystring - ?userid=1234
method   - get,post, put, delete, etc.method


app.get('/api/song');

GET:: http://localhost:8080/api/song?songid=1234

{
  method:'GET',
  protocol: 'http',
  hostname: 'localhost',
  port : 8080, 
  path : '/api/song',
  query : {
    songid:1234
  }
}

  api.get('/api/song/:genre')
  
  Components of a Request
  headers
  payload/body  - request.body
  
  
  {
    method: 'POST',
    protocol: 'https',
    hostname: 'makemymix.com',
    port: 80, 
    path: 'api/newsong',
    genre: 'jazz',
    subgenre: 'fusion'
  }
  


