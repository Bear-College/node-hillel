const EventEmitter = require('events');
const emitter = new EventEmitter();

// 1. Підписуємось на подію "login"
emitter.on('login', (user) => {
  console.log(`🟢 Користувач ${user.name} увійшов у систему`);
});

// 2. Логування в файл або базу
emitter.on('login', (user) => {
  console.log(`📝 Запис у лог: userId=${user.id}, час=${new Date().toISOString()}`);
});

// 3. Відправка email
emitter.on('login', (user) => {
  console.log(`📧 Надсилаємо email на ${user.email}`);
});

// 4. Перенаправлення користувача
emitter.on('login', (user) => {
  console.log(`➡️ Перенаправлення на dashboard`);
});

// === Симуляція логіну
const user = {
  id: 42,
  name: 'Влад',
  email: 'vlad@example.com'
};

emitter.emit('login', user);
