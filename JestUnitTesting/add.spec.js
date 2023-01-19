// add.spec.js
const { add } = require('./funcs');

describe('add', () => {
    test('correctly returns the sum of two numbers', () => {
        expect(add(2, 2)).toBe(4);
        expect(add(4, 6)).toBe(10);
    });
});

// Add testing script to package.json once jest is installed
// ...
//     "scripts": {
//         "test": "jest",
//         "test:watch": "jest --watch"
//     }
//     ...
