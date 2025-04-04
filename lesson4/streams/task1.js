const fs = require('fs');

const stream = fs.createReadStream('bigfile.txt', 'utf-8');

stream.on('data', chunk => {
  console.log('Chunk:', chunk.length); // частина файла
});

stream.on('end', () => {
  console.log('✅ File reading completed.');
});

stream.on('error', err => {
  console.error('❌ Error:', err);
});
