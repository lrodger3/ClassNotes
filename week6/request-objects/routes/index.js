console.log('Loading routes')

var LIBRARY = require('./library')

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './public/html'})
  })
  
  
  // Library
  app.get('/library/books', LIBRARY.books);
  
  app.get('/library/books/:genre', LIBRARY.genre)
  
  app.get('/library/books/:genre/:author', LIBRARY.genreauthor)
  
  app.post('/library/book', LIBRARY.addBook)
  
  // Coffee Shop
}