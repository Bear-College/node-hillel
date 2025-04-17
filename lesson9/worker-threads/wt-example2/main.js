const { Worker } = require('worker_threads');

function findPrimes(limit) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./primes-thread.js', { workerData: { limit } });
    worker.on('message', resolve);
    worker.on('error', reject);
  });
}

findPrimes(10000).then(primes => {
  console.log('Found', primes.length, 'prime numbers.');
});
