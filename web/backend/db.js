const sqlite3  = require('sqlite3').verbose();
const db       = new sqlite3.Database('./buku.db');

module.exports = db;