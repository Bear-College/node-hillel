const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// GET /users
router.get('/', function(req, res, next) {
  const filePath = path.join(__dirname, '..', 'submissions.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err || !data) {
      return res.render('users', {
        title: 'Користувачі',
        users: [],
        error: 'Не вдалося прочитати файл або файл порожній.'
      });
    }

    const users = data
      .split('\n')
      .filter(Boolean)
      .map(line => ({ name: line.replace('Ім’я: ', '').trim() }));

    res.render('users', { title: 'Користувачі', users });
  });
});

module.exports = router;
