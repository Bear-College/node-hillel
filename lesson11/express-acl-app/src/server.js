const express = require('express');
const { checkPermission } = require('./middleware/acl');
const { db } = require('./db/db');

const app = express();
app.use(express.json());

// Захищений маршрут
app.post('/resource/action', checkPermission, (req, res) => {
  res.json({ message: 'Action performed successfully' });
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
