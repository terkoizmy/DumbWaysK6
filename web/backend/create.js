const db    = require('./db');
const args  = process.argv.slice(2);
const query = `INSERT INTO book_tb (name,category_id,writer_id,publican_year,img)
               VALUES ( '${args[0]}','${args[1]}','${args[2]}','${args[3]}','${args[4]}')`;
const created = `INSERT INTO book_tb (name,category_id,writer_id,publican_year,img)
               VALUES ( '${args[0]}','${args[1]}','${args[2]}','${args[3]}','${args[4]}')`;

db.run(query, function (err) {
  if (err) throw err;
  console.log('Successfully created a new row!');
});

module.exports = created;