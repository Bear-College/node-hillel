async function test() {
    console.log("1");
    await new Promise(resolve => setTimeout(resolve, 0));
    console.log("2");
    }
    
    console.log("3");
    test();
    console.log("4");