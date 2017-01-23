var Library = require('../models/library')

module.exports = {
    books: function(req,res) {
      console.log('in library/books route')
      // /library/books?id=1
      if (typeof req.query.id !== 'undefined') {
        res.json(Library.findOne(req.query.id))
      } else if (typeof req.query.genre !== 'undefined') {
        // /library/books/genre/author
        if (typeof req.query.author !== 'undefined') {
          res.json(Library.findGenreAuthor(
            req.query.genre, req.query.author))
        // /library/books/genre
        } else {
          res.json(Library.findGenre(req.query.genre))
        }
        
      // route /library/books
      } else {
        res.json(Library.findAll())
      }
    },
    // this is how we would handle the route /library/books?genre=fiction 
    genre: function(req, res) {
      var results = Library.findGenre(req.params.genre)
      res.json(results.length > 0 ? results : 'No books')
    },
    // this is how we would handle the route /library/books?genre=fiction&author=Stephen%20King
    genreauthor: function(req, res) {
      var results = Library.findGenreAuthor(
        req.params.genre, req.params.author)
      //returnValue = ''; 
      //if (results.length > 0) {
      //    returnValue = results
      //} else {
      //    returnValue = 'No Books'
      //}
      // res.json(returnValue)
      // if no books are found, send no books, otherwise send the books
      res.json(results.length > 0 ? results : 'No books')
    },
    addBook: function(req, res) {
      Library.addBook(req.body);
      res.status(200).send('OK') 
    }
}