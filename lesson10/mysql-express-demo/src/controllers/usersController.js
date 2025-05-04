const db = require('../db/connection');

exports.createUser = async (req, res) => {
  const { name, age, city, email } = req.body;
  const [result] = await db.execute(
    'INSERT INTO users (name, age, city, email) VALUES (?, ?, ?, ?)',
    [name, age, city, email]
  );
  res.status(201).json({ id: result.insertId, name, age, city, email });
};

exports.getUsers = async (req, res) => {
  const { age, city } = req.query;
  let sql = 'SELECT * FROM users WHERE 1=1';
  const params = [];

  if (age) {
    sql += ' AND age = ?';
    params.push(age);
  }

  if (city) {
    sql += ' AND city = ?';
    params.push(city);
  }

  const [rows] = await db.execute(sql, params);
  res.json(rows);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, city, email } = req.body;

  await db.execute(
    'UPDATE users SET name = ?, age = ?, city = ?, email = ? WHERE id = ?',
    [name, age, city, email, id]
  );

  res.json({ message: 'User updated' });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await db.execute('DELETE FROM users WHERE id = ?', [id]);
  res.json({ message: 'User deleted' });
};

exports.getStats = async (req, res) => {
  const [rows] = await db.execute(`
    SELECT city, COUNT(*) as totalUsers, AVG(age) as averageAge
    FROM users
    GROUP BY city
  `);
  res.json(rows);
};
