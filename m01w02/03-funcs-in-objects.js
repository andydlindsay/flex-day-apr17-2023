// arrow functions do not create `this`

let writer = {
  name: 'agatha christie',
  books: [],
  writeBook: function(bookTitle) {
    // add this book to our `books` array
    this.books.push(bookTitle);
    console.log(this.name)
  }
};

const copy = writer;
writer = null;

// writer.books.push('new book')

console.log(copy);

console.log(copy.books); // []

copy.writeBook('new book title'); // error

console.log(copy.books); // ['new book title']
