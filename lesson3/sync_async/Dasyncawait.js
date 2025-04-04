console.log("Start");

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded!");
        }, 3000);
    });
}

async function main() {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data);
}

main();

console.log("End");