// ----------------------------
// CommonJS Module (math.js) in Node.js
// ----------------------------
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = { add, multiply };