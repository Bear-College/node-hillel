// ----------------------------
// Enabling ESM in Node.js
// ----------------------------
// To enable ESM in Node.js, add this to package.json:
// {
//   "type": "module"
// }

// ----------------------------
// ESM Import (app.mjs) in Node.js
// ----------------------------
import { add, multiply } from "./math.js";

console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20

// ----------------------------
// Dynamic Import Example in ESM (Node.js)
// ----------------------------
// import("./math.mjs").then(math => {
//     console.log(math.add(10, 5)); // 15
// });