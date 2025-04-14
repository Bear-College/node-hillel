const { workerData } = require('worker_threads');
const http = require('http');
const { factorial } = require('./factorial');

http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const n = parseInt(url.searchParams.get('number'), 10);

  if (!isNaN(n)) {
    const result = factorial(n);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ port: workerData.port, result }));
  } else {
    res.writeHead(400);
    res.end('Invalid number');
  }
}).listen(workerData.port, () => {
  console.log(`Thread Server running on port ${workerData.port}`);
});
