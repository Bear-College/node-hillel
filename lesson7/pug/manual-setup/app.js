const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Головна',
    message: 'Привіт із головної сторінки!'
  });
});

app.get('/users', (req, res) => {
  const filePath = path.join(__dirname, 'submissions.txt');

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
      .map(line => {
        const name = line.replace('Ім’я: ', '').trim();
        return { name };
      });

    res.render('users', { title: 'Користувачі', users });
  });
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  const data = `Ім’я: ${name}\n`;

  const filePath = path.join(__dirname, 'submissions.txt');
  fs.appendFile(filePath, data, (err) => {
    if (err) {
      console.error('Помилка запису у файл:', err);
      return res.status(500).send('Сталася помилка при збереженні.');
    }
    res.send(`Дякую, ${name}! Твоє ім’я збережено у файл ✅`);
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost: ${PORT}`);
});
