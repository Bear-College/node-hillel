console.log("Start");

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Fetched!");
        }, 2000);
    });
}

async function main() {
    console.log("Fetching...");
    const data = await fetchData();
    console.log(data);
}

main();

console.log("End");