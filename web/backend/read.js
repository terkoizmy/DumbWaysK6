const db = require('./db');

db.all('SELECT * FROM book_tb', function (err, book_tb) {
  console.log(book_tb);
});