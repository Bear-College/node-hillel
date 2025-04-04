// ----------------------------
// Loops in JavaScript
// ----------------------------
// for loop
for (let i = 0; i < 5; i++) {
    console.log("Step", i);
}

// while loop
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

// do-while loop
let j = 5;
do {
    console.log(j);
    j++;
} while (j < 3);

// for-in loop (for objects)
const user = { name: "Alice", age: 25 };
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

// for-of loop (for arrays)
const fruits = ["🍎", "🍌", "🍇"];
for (let fruit of fruits) {
    console.log(fruit);
}

// break example
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}

// continue example
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}

// ----------------------------
// Hoisting Example
// ----------------------------
console.log(b); // ReferenceError (let does not hoist)
let b = 20;