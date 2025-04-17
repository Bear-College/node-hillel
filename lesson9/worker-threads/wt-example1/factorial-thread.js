const { workerData, parentPort } = require('worker_threads');

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

parentPort.postMessage(factorial(workerData));
