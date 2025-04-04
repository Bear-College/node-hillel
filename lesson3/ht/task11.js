async function foo() {
    console.log("foo початок");
    await bar();
    console.log("foo кінець");
    }
    
    async function bar() {
    console.log("bar початок");
    await Promise.resolve();
    console.log("bar кінець");
    }
    
    console.log("Початок");
    setTimeout(() => console.log("setTimeout"), 0);
    foo();
    console.log("Кінець");