const { workerData, parentPort } = require('worker_threads');

const sharedBuffer = workerData.shared;
const counter = new Int32Array(sharedBuffer);

for (let i = 0; i < 1_000_000; i++) {
  Atomics.add(counter, 0, 1);
}

parentPort.postMessage('done');
