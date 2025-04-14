const fs = require('fs');

const imageBuffer = fs.readFileSync('logo.png');
const base64 = imageBuffer.toString('base64');

console.log(`data:image/png;base64,${base64}`);
