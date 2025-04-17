const { Worker } = require('worker_threads');

const shared = new SharedArrayBuffer(4);
const counter = new Int32Array(shared);
counter[0] = 0;

const NUM_WORKERS = 4;

const workers = Array.from({ length: NUM_WORKERS }, () =>
  new Worker('./increment-thread.js', { workerData: { shared } })
);

Promise.all(workers.map(w => new Promise(res => w.on('message', res))))
  .then(() => {
    console.log('Final counter value:', counter[0]);
  });
