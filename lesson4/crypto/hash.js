const crypto = require('crypto');

const hash = crypto.createHash('sha256').update('password').digest('hex');
console.log(hash);

const token = crypto.randomBytes(16).toString('hex');
console.log('Token:', token);

// const algorithm = 'aes-256-cbc';
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);

// const cipher = crypto.createCipheriv(algorithm, key, iv);
// let encrypted = cipher.update('Hello world', 'utf8', 'hex');
// encrypted += cipher.final('hex');

// const decipher = crypto.createDecipheriv(algorithm, key, iv);
// let decrypted = decipher.update(encrypted, 'hex', 'utf8');
// decrypted += decipher.final('utf8');

// console.log('Encrypted:', encrypted);
// console.log('Decrypted:', decrypted);