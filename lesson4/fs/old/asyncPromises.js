const fs = require('fs/promises');

async function run() {
  try {
    const content = await fs.readFile('file.txt', 'utf-8');
    console.log('Before:', content);

    await fs.appendFile('file.txt', 'Hello, world!');

    const newContent = await fs.readFile('file.txt', 'utf-8');
    console.log('After:', newContent);
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

run();