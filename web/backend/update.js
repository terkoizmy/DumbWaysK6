const db    = require('./db');
const args  = process.argv.slice(2);
const query = `UPDATE book_tb
               SET name         ='${args[1]}',
                   category_id  ='${args[2]}',
                   writer_id    ='${args[3]}',
                   publican_year='${args[4]}',
                   img          ='${args[5]}'
               WHERE id=${args[0]}`;

db.run(query, function (err) {
  if (err) throw err;
  console.log('Successfully updated!');
});

module.exports = query;