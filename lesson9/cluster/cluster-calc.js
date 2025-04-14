const cluster = require('cluster');
const os = require('os');

const nums = Array.from({ length: 1_000_000 }, () => Math.floor(Math.random() * 10));
const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`👑 Master ${process.pid}`);

  const chunkSize = Math.ceil(nums.length / numCPUs);
  let results = [];
  let completed = 0;

  for (let i = 0; i < numCPUs; i++) {
    const start = i * chunkSize;
    const end = start + chunkSize;
    const worker = cluster.fork();

    // Надсилаємо частину масиву воркеру
    worker.send({ data: nums.slice(start, end) });

    worker.on('message', (msg) => {
      results.push(msg.sum);
      completed++;

      if (completed === numCPUs) {
        const total = results.reduce((a, b) => a + b, 0);
        console.log(`✅ Загальна сума: ${total}`);
      }
    });
  }

} else {
  process.on('message', ({ data }) => {
    const sum = data.reduce((a, b) => a + b, 0);
    process.send({ sum });
  });
}
