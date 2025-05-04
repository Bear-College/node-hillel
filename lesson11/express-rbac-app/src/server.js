const express = require('express');
const { checkRole } = require('./middleware/rbac');
const { db } = require('./db/db');

const app = express();
app.use(express.json());

// Захищені маршрути
app.get('/admin', checkRole(['admin']), (req, res) => {
  res.json({ message: 'Welcome, admin!' });
});

app.get('/manager', checkRole(['admin', 'manager']), (req, res) => {
  res.json({ message: 'Welcome, manager or admin!' });
});

app.get('/user', checkRole(['admin', 'manager', 'user']), (req, res) => {
  res.json({ message: 'Welcome, any authorized user!' });
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
