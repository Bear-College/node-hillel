const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];

    req.on('data', chunk => chunks.push(chunk));

    req.on('end', () => {
      const file = Buffer.concat(chunks);
      fs.writeFileSync('upload.png', file);

      res.writeHead(200);
      res.end('Файл збережено!');
    });
  }
}).listen(3000);
