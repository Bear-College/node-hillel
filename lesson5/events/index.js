const EventEmitter = require('events');

// Створюємо обʼєкт подій
const emitter = new EventEmitter();

// 1. Підписка на подію "greet"
emitter.on('greet', (name) => {
  console.log(`Привіт, ${name}!`);
});

// 2. Підписка на подію "greet" ще раз (можна кілька обробників)
emitter.on('greet', (name) => {
  console.log(`Як справи, ${name}?`);
});

// 3. Підписка на подію "bye"
emitter.on('bye', (name) => {
  console.log(`Бувай, ${name}!`);
});

// 4. Викликаємо подію
// emitter.emit('greet', 'Влад');
emitter.emit('bye', 'Влад');


const fns = emitter.listeners('bye');
console.log(fns); // Кількість слухачів
