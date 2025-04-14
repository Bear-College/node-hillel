const http = require('http');

http.createServer((req, res) => {
  let body = [];

  req.on('data', chunk => {
    body.push(chunk); // кожен chunk — це Buffer
  });

  req.on('end', () => {
    const fullBuffer = Buffer.concat(body);
    const text = fullBuffer.toString('utf-8');

    console.log('Дані з тіла запиту:', text);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Отримано!');
  });
}).listen(3000);
