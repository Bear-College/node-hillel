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
    foo();
    console.log("Кінець");