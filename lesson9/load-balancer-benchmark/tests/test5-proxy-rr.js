const { Worker } = require('worker_threads');
const http = require('http');
const httpProxy = require('http-proxy');
const path = require('path');

const ports = [8000, 8001, 8002, 8003];
let current = 0;

ports.forEach(port => {
  new Worker(path.resolve(__dirname, '../proxy-thread-server.js'), { workerData: { port } });
});

const proxy = httpProxy.createProxyServer();
http.createServer((req, res) => {
  const targetPort = ports[current];
  current = (current + 1) % ports.length;
  proxy.web(req, res, { target: `http://localhost:${targetPort}` }, err => {
    res.writeHead(502);
    res.end(`Proxy Error: ${err.message}`);
  });
}).listen(3004, () => {
  console.log('Proxy RR server on http://localhost:3004');
});
