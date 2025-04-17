const { runWorker } = require('./helper');

runWorker('./factorial-thread.js', 12)
  .then(result => console.log('Factorial result:', result))
  .catch(console.error);
