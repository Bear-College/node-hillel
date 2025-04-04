// ----------------------------
// Functions in JavaScript
// ----------------------------
function sum(a, b) {
    return a + b;
}

const multiply = function (a, b) {
    return a * b;
};

const arrowSum = (a, b) => a + b;

const increment = (() => {
    let count = 0;
    return () => ++count;
})();

console.log(increment()); // 1
console.log(increment()); // 2
