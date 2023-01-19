const assert = require('assert');

function add(num1, num2) {
    return num1 + num2;
}

assert.strictEqual(add(2, 2), 4);
assert.strictEqual(add(4, 6), 10);

// to add jest as a dev dependency:
// run: npm i --save-dev jest

