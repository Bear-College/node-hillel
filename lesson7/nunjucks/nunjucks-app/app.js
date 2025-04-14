const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();
const PORT = 3000;

// Nunjucks config
nunjucks.configure('views', {
  autoescape: true,
  express: app
});

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Роутинг
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Запуск
app.listen(PORT, () => {
  console.log(`Сервер запущено: http://localhost:${PORT}`);
});
