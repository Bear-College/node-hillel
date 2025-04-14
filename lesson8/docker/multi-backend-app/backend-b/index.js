const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 4002;

app.get('/', (req, res) => {
  const message = 'Hello from Backend B!';
  fs.appendFileSync('/app-data/log.txt', `${new Date().toISOString()} - ${message}\n`);
  res.send(message);
});

app.listen(PORT, () => {
  console.log(`Backend B running on http://localhost:${PORT}`);
});