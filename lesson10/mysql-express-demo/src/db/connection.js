const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost', //127.0.0.1
  user: 'root',
  password: '', // replace with your real password
  database: 'new_schema5',         // make sure this DB exists
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
