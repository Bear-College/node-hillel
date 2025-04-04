const { Transform } = require('stream');

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

process.stdin.pipe(upperCase).pipe(process.stdout);

// введи в терміналі: hello world
