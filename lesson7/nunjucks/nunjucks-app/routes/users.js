const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// GET /users
router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '..', 'submissions.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err || !data) {
      return res.render('users.njk', {
        title: 'Користувачі',
        users: [],
        error: 'Файл порожній або не знайдено.'
      });
    }

    const users = data
      .split('\n')
      .filter(Boolean)
      .map(line => ({ name: line.replace('Ім’я: ', '').trim() }));

    res.render('users.njk', { title: 'Користувачі', users });
  });
});

module.exports = router;
