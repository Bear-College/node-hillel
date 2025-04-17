const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'test_db',
});

connection.connect(err => {
  if (err) {
    console.error('❌ MySQL connection error:', err.message);
    process.exit(1);
  }
  console.log('✅ Connected to MySQL');
});

module.exports = connection;

