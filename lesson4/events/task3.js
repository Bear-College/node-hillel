const EventEmitter = require('events');

const emitter = new EventEmitter();

function greet(name) {
    console.log(`Hello, ${name}`);
}

// 1. Підписка на подію
emitter.on('greet', greet);

emitter.removeAllListeners("greet", greet);

// 2. Виклик події
emitter.emit('greet', 'Vlad');

emitter.emit('greet', 'Vlad1');

// emitter.removeAllListeners('greet', 'Vlad');