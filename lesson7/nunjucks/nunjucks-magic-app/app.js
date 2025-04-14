const express = require('express');
const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Nunjucks config
nunjucks.configure('views', {
  express: app,
  autoescape: true
}).addFilter('reverse', str => str.split('').reverse().join(''));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Головна сторінка
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'submissions.txt');
  let users = [];

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    users = data.split('\n')
                .filter(Boolean)
                .map(line => ({ name: line.replace('Ім’я: ', '').trim() }));
  } catch (err) {
    users = [];
  }

  res.render('index.njk', {
    title: 'Головна',
    users
  });
});

// Збереження імені
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const filePath = path.join(__dirname, 'submissions.txt');
  const line = `Ім’я: \${name}\n`;

  fs.appendFile(filePath, line, err => {
    if (err) return res.status(500).send('Помилка при збереженні');
    res.redirect('/');
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер на http://localhost:${PORT}`);
});
