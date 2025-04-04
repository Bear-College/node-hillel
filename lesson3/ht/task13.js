console.log("Початок");

Promise.resolve().then(() => {
    console.log("Promise 1");
    return Promise.resolve();
}).then(() => {
    console.log("Promise 2");
});

console.log("Кінець");