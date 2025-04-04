console.log("Start");

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

promise.then((message) => {
    console.log(message);
});

console.log("End");