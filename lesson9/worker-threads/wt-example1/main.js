const { Worker } = require('worker_threads');

function runFactorial(n) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./factorial-thread.js', { workerData: n });
    worker.on('message', resolve);
    worker.on('error', reject);
  });
}

runFactorial(10).then(result => console.log('Factorial result:', result));
