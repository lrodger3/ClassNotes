var library = [
  {
    title: 'Jungle Book',
    author: 'Rudyard Kipling',
    genre: 'adventure'
  },
  {
    title: 'Mona Lisa Overdrive',
    author: 'William Gibson',
    genre: 'cyberpunk'
  },
  {
    title: 'The Bluest Eye',
    author: 'Toni Morrison',
    genre: 'fiction'
  }
]

function findOne(index) {
  return library[index];
}

function findAll() {
  return library;
}

function findGenre(genre) {
  var genreBooks = library.filter(function(book){
    return book.genre == genre;
  })
  return genreBooks
}

function findGenreAuthor(genre, author) {
  return library.filter(function(book) {
    return (book.genre == genre && book.author == author)
  })
}

function addBook(bookInfo) {
  console.log('Adding new book '+ bookInfo.title + ' by ' 
              + bookInfo.author + ' a ' 
              + bookInfo.genre + ' book.')
  library.push(bookInfo)
}

module.exports = {
  findAll : findAll,
  findOne : findOne,
  findGenre: findGenre,
  findGenreAuthor : findGenreAuthor,
  addBook : addBook
}