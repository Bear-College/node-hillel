async function asyncFunc() {
    console.log("asyncFunc початок");
    await Promise.resolve();
    console.log("asyncFunc кінець");
    }
    
    console.log("Початок");
    asyncFunc();
    console.log("Кінець");