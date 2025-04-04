console.log("Start");

Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => {
    console.log("Promise 2");
    setTimeout(() => console.log("setTimeout inside Promise"), 0);
});

setTimeout(() => console.log("setTimeout"), 0);

console.log("End");