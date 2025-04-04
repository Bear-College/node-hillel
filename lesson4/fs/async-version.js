const fs = require('fs/promises');
const path = require('path');

const folderPath = path.join(__dirname, 'test-folder');
const filePath = path.join(folderPath, 'file.txt');

async function main() {
  try {
    // 1. Створити директорію
    await fs.mkdir(folderPath, { recursive: true });
    console.log('✅ Директорію створено');

    // 2. Записати текст у файл
    await fs.writeFile(filePath, 'Hello World!');
    console.log('✍️ Файл створено і записано');

    // 3. Додати ще один рядок
    await fs.appendFile(filePath, '\nAppended line');
    console.log('➕ Рядок додано');

    // 4. Зчитати файл
    const content = await fs.readFile(filePath, 'utf8');
    console.log('📖 Вміст файлу:\n', content);

    // 5. Інформація про файл
    const stats = await fs.stat(filePath);
    console.log('ℹ️ Інфо про файл:');
    console.log(`Розмір: ${stats.size} байт`);
    console.log(`Створено: ${stats.birthtime}`);

    // 6. Видалити файл
    await fs.unlink(filePath);
    console.log('🗑️ Файл видалено');

    // 7. Видалити директорію
    await fs.rmdir(folderPath);
    console.log('🧹 Директорія видалена');
  } catch (err) {
    console.error('❌ Помилка:', err.message);
  }
}

main();