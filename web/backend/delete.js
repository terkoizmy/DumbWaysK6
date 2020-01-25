const db    = require('./db');
const args  = process.argv.slice(2);
const query = `DELETE FROM book_tb WHERE id=${args[0]}`;
const deleted = `DELETE FROM book_tb WHERE id=${args[0]}`;

db.run(query, function (err) {
  if (err) throw err;
  console.log('Successfully deleted!');
});


module.exports = deleted;