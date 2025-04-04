console.log("Start");

const fastRequest = new Promise((resolve) =>
    setTimeout(() => resolve("Fast Response"), 1000)
);
const slowRequest = new Promise((resolve) =>
    setTimeout(() => resolve("Slow Response"), 3000)
);

Promise.race([fastRequest, slowRequest]).then(console.log);

console.log("End");