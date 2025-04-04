const fs = require('fs');

// Read with stream
let contentBefore = '';
const readStream = fs.createReadStream('source.txt', 'utf-8');

readStream.on('data', chunk => {
  contentBefore += chunk;
});

readStream.on('end', () => {
  console.log('Before:', contentBefore);

  // Write asynchronously
  fs.writeFile('source.txt', 'Hello, world!', (err) => {
    if (err) throw err;

    // Read again with stream
    let contentAfter = '';
    const readStream2 = fs.createReadStream('source.txt', 'utf-8');

    readStream2.on('data', chunk => {
      contentAfter += chunk;
    });

    readStream2.on('end', () => {
      console.log('After:', contentAfter);
    });
  });
});