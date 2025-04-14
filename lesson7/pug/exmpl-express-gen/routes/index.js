const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// GET /
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Головна' });
});

// POST /submit
router.post('/submit', function(req, res) {
  const name = req.body.name;
  const filePath = path.join(__dirname, '..', 'submissions.txt');
  const line = `Ім’я: ${name}\n`;

  fs.appendFile(filePath, line, err => {
    if (err) {
      console.error('Помилка запису:', err);
      return res.status(500).send('Помилка при збереженні');
    }
    res.send(`Дякуємо, ${name}!`);
  });
});

module.exports = router;
