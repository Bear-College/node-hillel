const fs = require('fs'); // callback / sync API

let content = fs.readFileSync('file.txt', 'utf-8');
console.log(content);

fs.appendFileSync('file.txt', 'Hello, world!', (err) => {
    if (err) throw err;
});

content = fs.readFileSync('file.txt', 'utf-8');
console.log(content);
