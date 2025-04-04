const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'test-folder');
const filePath = path.join(folderPath, 'file.txt');

try {
  // 1. Створити директорію
  fs.mkdirSync(folderPath, { recursive: true });
  console.log('✅ Директорію створено');

  // 2. Записати текст у файл
  fs.writeFileSync(filePath, 'Hello World!');
  console.log('✍️ Файл створено і записано');

  // 3. Додати ще один рядок
  fs.appendFileSync(filePath, '\nAppended line');
  console.log('➕ Рядок додано');

  // 4. Зчитати файл
  const content = fs.readFileSync(filePath, 'utf8');
  console.log('📖 Вміст файлу:\n', content);

  // 5. Інформація про файл
  const stats = fs.statSync(filePath);
  console.log('ℹ️ Інфо про файл:');
  console.log(`Розмір: ${stats.size} байт`);
  console.log(`Створено: ${stats.birthtime}`);

  // 6. Видалити файл
  fs.unlinkSync(filePath);
  console.log('🗑️ Файл видалено');

  // 7. Видалити директорію
  fs.rmdirSync(folderPath);
  console.log('🧹 Директорія видалена');
} catch (err) {
  console.error('❌ Помилка:', err.message);
}