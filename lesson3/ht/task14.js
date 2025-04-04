async function foo() {
    console.log("foo початок");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("foo кінець");
    }
    
    console.log("Початок");
    foo();
    console.log("Кінець");