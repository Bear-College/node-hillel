const http = require('http');
const { factorial } = require('../factorial');

http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const n = parseInt(url.searchParams.get('number'), 10);

  if (!isNaN(n)) {
    const result = factorial(n);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result }));
  } else {
    res.writeHead(400);
    res.end('Invalid number');
  }
}).listen(3000, () => {
  console.log('Single-thread server running on http://localhost:3000');
});
