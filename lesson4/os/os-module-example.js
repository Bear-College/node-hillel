
const os = require('os');

// Platform and Architecture
console.log('🖥️ Platform:', os.platform());       // e.g. 'win32', 'linux', 'darwin'
console.log('🧱 Architecture:', os.arch());       // e.g. 'x64'

// CPU Info
console.log('🧠 CPU Cores:', os.cpus().length);
console.log('🧠 CPU Info:', os.cpus()[0]);        // Info about first core

// Memory
console.log('🧮 Total Memory:', (os.totalmem() / 1024 / 1024).toFixed(2), 'MB');
console.log('💾 Free Memory:', (os.freemem() / 1024 / 1024).toFixed(2), 'MB');

// Uptime
console.log('⏱️ Uptime (sec):', os.uptime());

// User Info
console.log('👤 User Info:', os.userInfo());

// Network Interfaces
console.log('🌐 Network Interfaces:', os.networkInterfaces());

// Home & Temp directory
console.log('🏠 Home Directory:', os.homedir());
console.log('📁 Temp Directory:', os.tmpdir());

// Host and OS Type
console.log('🔗 Hostname:', os.hostname());
console.log('🧬 OS Type:', os.type());

// End-of-line character
console.log('📏 End-of-line character:', JSON.stringify(os.EOL));
