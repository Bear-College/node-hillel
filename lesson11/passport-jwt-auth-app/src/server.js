const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { jwtStrategy, users } = require('./config/passport');
const { authenticateJwt } = require('./middleware/authenticate');

const app = express();
app.use(express.json());

// Ініціалізація Passport
passport.use(jwtStrategy);
app.use(passport.initialize());

const SECRET_KEY = 'your_secret_key';

// Реєстрація
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, email, passwordHash };
  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully' });
});

// Логін
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });

  res.json({ token });
});

// Захищений маршрут
app.get('/profile', authenticateJwt, (req, res) => {
  res.json({ message: 'Welcome to your profile!', user: req.user });
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
