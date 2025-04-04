// ----------------------------
// Hybrid Module (math.js) for Both CJS and ESM in Node.js
// ----------------------------
const addHybrid = (a, b) => a + b;
const multiplyHybrid = (a, b) => a * b;

if (typeof module !== "undefined") {
    module.exports = { addHybrid, multiplyHybrid }; // CommonJS export
}

export { addHybrid, multiplyHybrid }; // ESM export
