console.log("Початок");

setTimeout(() => {
console.log("setTimeout");
}, 0);

async function asyncFunc() {
console.log("asyncFunc початок");
await new Promise(resolve => resolve());
console.log("asyncFunc кінець");
}

asyncFunc();

Promise.resolve().then(() => {
console.log("Promise");
});

console.log("Кінець");