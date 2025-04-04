console.log("Початок");

setTimeout(() => console.log("setTimeout 1"), 0);

Promise.resolve().then(() => {
console.log("Promise 1");
setTimeout(() => console.log("setTimeout 2"), 0);
});

async function asyncFunc() {
console.log("asyncFunc початок");
await Promise.resolve();
console.log("asyncFunc кінець");
}

asyncFunc();

console.log("Кінець");