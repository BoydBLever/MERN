// Number.prototype.isPrime = function () {
//     for (let i = 2; i < Math.sqrt(this); i++) {
//         if (this % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while (primeCount < 1e4) {
//     if (num.isPrime()) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num - 1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// OUTPUT: The 10,000th prime number is 104729
// Time required: 31 seconds
// Time required: <1 second with i < Math.sqrt(this)

//Time required: more than a minute to determine 1,000,000th. ABORT.

// OUTPUT:
//The 100,000th prime number is 1297001
//This took 6006.970499992371 milliseconds to run
// recursive
//Which implementation of Fibonacci should be faster?
//recursive
// function rFib(n) {
//     if (n < 2) {
//         return n;
//     }
//     return rFib(n - 1) + rFib(n - 2);
// }
// console.log(rFib(20));
// iterative
// function iFib(n) {
//     const vals = [0, 1];
//     while (vals.length - 1 < n) {
//         let len = vals.length;
//         vals.push(vals[len - 1] + vals[len - 2]);
//     }
//     return vals[n];
// }
// console.log(iFib(20));

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
