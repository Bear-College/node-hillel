async function foo() {
    console.log("foo початок");
    await Promise.resolve();
    console.log("foo кінець");
}

console.log("Початок");
foo();
console.log("Кінець");