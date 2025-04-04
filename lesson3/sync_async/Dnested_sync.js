function first() {
    console.log("First function");
    second();
    console.log("First function end");
}

function second() {
    console.log("Second function");
}

console.log("Start");
first();
console.log("End");