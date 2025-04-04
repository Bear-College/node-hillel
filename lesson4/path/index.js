const path = require('path');

console.log('__dirname ', __dirname)

// 🔹 1. Join paths
const fullPath = path.join(__dirname, 'file.txt');
console.log('📁 path.join:', fullPath);

// 🔹 2. Resolve absolute path
const absolutePath = path.resolve('folder', 'folder', 'file.txt');
console.log('🧭 path.resolve:', absolutePath);

// 🔹 3. Get base name
const base = path.basename(fullPath); // 'file.txt'
console.log('📄 path.basename:', base);

// 🔹 4. Get directory name
const dir = path.dirname(fullPath);
console.log('📂 path.dirname:', dir);

// 🔹 5. Get extension
const ext = path.extname(fullPath); // '.txt'
console.log('📌 path.extname:', ext);

// 🔹 6. Parse a full path
const parsed = path.parse(fullPath);
console.log('🔍 path.parse:', parsed);

// 🔹 7. Format back from parts
const formatted = path.format({
  root: parsed.root,
  dir: parsed.dir,
  base: 'newfile.md'
});
console.log('🛠️ path.format:', formatted);