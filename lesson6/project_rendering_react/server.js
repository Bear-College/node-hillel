const express = require('express');
const path = require('path');
const app = express();

// Роздаємо білд React
app.use(express.static(path.join(__dirname, 'client/build')));

// Всі маршрути ведуть на index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(3000, () => {
  console.log('CSR server running on http://localhost:3000');
});

