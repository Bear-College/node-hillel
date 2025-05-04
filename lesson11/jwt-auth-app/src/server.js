const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { authenticateToken } = require('./middleware/auth');

const app = express();
app.use(express.json());

// Уявна база користувачів
const users = [];

const SECRET_KEY = 'your_secret_key'; // !!! У продакшені використовуй змінні середовища

// Реєстрація
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  users.push({ id: users.length + 1, email, passwordHash });
  res.status(201).json({ message: 'User registered successfully' });
});

// Логін
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

  res.json({ token });
});

// Захищений маршрут
app.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to your profile!', user: req.user });
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
