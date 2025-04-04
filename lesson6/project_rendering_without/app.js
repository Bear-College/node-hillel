const express = require('express');
const path = require('path');
const app = express();

// Встановлюємо EJS як шаблонізатор
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ✅ 1. Шаблон з рендерингом
app.get('/user', (req, res) => {
  res.render('user', { name: 'Владислав' });
});

// ✅ 2. Статичний HTML без рендерингу
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Сервер працює на http://localhost:3000');
});