const http = require('http');
const { Worker } = require('worker_threads');
const path = require('path');

function calculateFactorial(n) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.resolve(__dirname, '../server-thread.js'), {
      workerData: n,
    });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', code => {
      if (code !== 0) reject(new Error(`Worker exited with code ${code}`));
    });
  });
}

http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const n = parseInt(url.searchParams.get('number'), 10);
  if (isNaN(n)) return res.writeHead(400).end('Invalid number');

  try {
    const result = await calculateFactorial(n);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result }));
  } catch {
    res.writeHead(500).end('Internal Error');
  }
}).listen(3001, () => {
  console.log('Worker-thread server running on http://localhost:3001');
});
