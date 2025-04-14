const cluster = require('cluster');
const http = require('http');
const os = require('os');
const { factorial } = require('../factorial');

const numCPUs = os.cpus().length;
cluster.schedulingPolicy = cluster.SCHED_RR;

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) cluster.fork();
} else {
  http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const n = parseInt(url.searchParams.get('number'), 10);
    if (!isNaN(n)) {
      const result = factorial(n);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ pid: process.pid, result }));
    } else {
      res.writeHead(400).end('Invalid number');
    }
  }).listen(3002, () => {
    console.log(`Worker ${process.pid} on http://localhost:3002`);
  });
}
