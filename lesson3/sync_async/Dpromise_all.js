console.log("Start");

const fetchUser = new Promise((resolve) =>
    setTimeout(() => {
        resolve("User Data")
    }, 1000)
);
const fetchPosts = new Promise((resolve) =>
    setTimeout(() => resolve("Posts Data"), 10000)
);

Promise.all([fetchUser, fetchPosts]).then(([user, posts]) => {
    console.log(user);
    console.log(posts);
});

console.log("End");

// const p1 = Promise.resolve(10);
// const p2 = Promise.reject("Error!");
// const p3 = Promise.resolve(30);

// Promise.allSettled([p1, p2, p3])
//   .then(results => console.log(results));

// const p1 = Promise.resolve(10);
// const p2 = Promise.reject("Error!");
// const p3 = Promise.resolve(30);

// Promise.all([p1, p2, p3])
//   .then(results => console.log(results))
//   .catch(error => console.error(error));


// const p1 = new Promise((_, reject) => setTimeout(() => reject("Error!"), 3000));
// const p2 = new Promise(resolve => setTimeout(() => resolve("Success"), 2000));

// Promise.race([p1, p2])
// .then(result => console.log(result))
// .catch(error => console.error(error)); // Output: "Error!" (because p1 rejects first)