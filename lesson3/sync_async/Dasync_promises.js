console.log("Start");

async function testAsync() {
    console.log("Inside async function");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("After await");
}

testAsync();

new Promise((resolve) => resolve("Promise resolved")).then(console.log);

console.log("End");