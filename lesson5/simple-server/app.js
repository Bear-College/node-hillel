const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Привіт, світ!');
});

server.listen(3000, () => {
  console.log('Сервер запущено на http://localhost:3000');
});