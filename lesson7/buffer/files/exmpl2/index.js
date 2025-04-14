const fs = require('fs');

const data = Buffer.from('Це текст з буфера');
fs.writeFileSync('output.txt', data);
