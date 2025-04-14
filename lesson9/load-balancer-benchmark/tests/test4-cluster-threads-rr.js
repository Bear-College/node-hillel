const cluster = require('cluster');
const http = require('http');
const os = require('os');
const { Worker } = require('worker_threads');
const path = require('path');

const workers = [];
let current = 0;

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length; i++) workers.push(cluster.fork());

  http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const n = parseInt(url.searchParams.get('number'), 10);
    const requestId = Date.now() + Math.random();
    const target = workers[current];
    current = (current + 1) % workers.length;

    const listener = (msg) => {
      if (msg.requestId === requestId) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(msg.result));
        target.off('message', listener);
      }
    };

    target.on('message', listener);
    target.send({ number: n, requestId });
  }).listen(3003, () => {
    console.log('Cluster+Threads+RR server at http://localhost:3003');
  });
} else {
  process.on('message', (msg) => {
    const { number, requestId } = msg;
    const worker = new Worker(path.resolve(__dirname, '../server-thread.js'), {
      workerData: number
    });

    worker.on('message', (result) => {
      process.send({ requestId, result: { result, pid: process.pid } });
    });
    worker.on('error', err => process.send({ requestId, result: { error: err.message } }));
  });
}
