const express = require('express');
const app = express();

const logger = require('./middlewares/logger');
const auth = require('./middlewares/auth');

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.send('Welcome to the public route!');
});

app.get('/protected', auth, (req, res) => {
  res.send('You are authorized!');
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
