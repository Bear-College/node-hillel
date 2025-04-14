const fs = require('fs');

const buffer = fs.readFileSync('example.txt');
console.log(buffer);               // <Buffer 48 65 6c 6c 6f ...>
console.log(buffer.toString());   // Hello world!
