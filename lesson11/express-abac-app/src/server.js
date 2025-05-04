const express = require('express');
const { checkAccess } = require('./middleware/abac');
const { db } = require('./db/db');

const app = express();
app.use(express.json());

// Захищений маршрут
app.post('/documents/access', checkAccess, (req, res) => {
  res.json({ message: 'Access granted to document' });
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
