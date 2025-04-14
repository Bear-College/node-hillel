const { parentPort, workerData } = require('worker_threads');
const { factorial } = require('./factorial');

const result = factorial(workerData);
parentPort.postMessage(result);
