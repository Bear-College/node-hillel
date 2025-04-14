const fs = require('fs');

const original = fs.readFileSync('./input.jpg'); // будь-який файл
fs.writeFileSync('copy.jpg', original);
