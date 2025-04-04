const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Built-in middleware to parse JSON
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Use routes
app.use('/users', userRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || 'Something went wrong' });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});