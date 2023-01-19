01//Go to line 95 for the start of practice assignment Hoisting
//------------------------
// var beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//     function actuallyPrintingNames() {
//         for (var index = 0; index < names.length; index++) {
//             var name = names[index];

// const { ErrorResponse, getToPathname } = require("@remix-run/router");
// const { getPathContributingMatches } = require("@remix-run/router/dist/utils");
// const { useAsyncValue } = require("react-router-dom");

// //             console.log(name + ' was found at index ' + index);
// //         }
// //         console.log('name and index after loop is ' + name + ':' + index);
// //     }
// //     actuallyPrintingNames();
// // }
// // printNames(beatles);

// //How many scopes can I identify? 
// //We always have a global scope, and each function will create a new scope, so there are 3 scopes for the above Beatles example.
// //The for loop does not create a scope. Variables that are exclusive to it, name and index, are available after completion. This is because JavaScript is function scope, so any variables, no matter where they are defined, are available throughout the entire scope.
// // const beatles = ['Paul', 'George', 'John', 'Ringo'];
// // function printNames(names) {
// //     function actuallyPrintingNames() {
// //         for (let index = 0; index < names.length; index++) {
// //             const name = names[index];

// //             console.log(name + ' was found at index ' + index);
// //         }
// //     }
// //     actuallyPrintingNames();
// // }
// // printNames(beatles);

// // console.log(magicalUnicorns);
// // output: reference error, magicalUnicorns is not defined.

// // console.log(magicalUnicorns);
// // var magicalUnicorns = "awesome";
// // output: undefined

// // //The var variable is being hoisted.
// // How does JavaScript actually read this?
// // variable declarations are hoisted to the top of their "scope"
// // var magicalUnicorns; // the declaration gets hoisted to the top of the scope by itself
// // console.log(magicalUnicorns); // we log it as undefined
// // magicalUnicorns = "awesome"; // the assignment stays exactly where it was

// // console.log(magicalUnicorns);
// // let magicalUnicorns = "awesome";
// // Output: reference ErrorResponse.

// // What is the point of all this?

// // var foo = "bar";
// // function magic(){
// //     foo = "hello world";
// //     console.log(foo);
// //     var foo;
// // }
// // magic();
// // console.log(foo);
// // output:
// // hello world 
// // bar
// // Functions act like a "cage" preventing declarations from being hoisted out of them.


// function magicalUnicorns(){
//     console.log("Will it blend?");
// }
// magicalUnicorns(); 🦄

// 4 Rules of Hoisting:
// 1. variable declarations (var) rise to the top of their scope like hot air ballons 
// 2. functions create their own scope and act like "cages", preventing declarations from rising out. 
// 3. Assignments, or =, act like anchors. They stay put, no matter how the code is rearranged
// 4. Variables declared with let and const are also hoisted but unlike var are not initialized with a default value. An exception will be thrown if a variable declared with let or const is read before it is initialized.

//Assignment: JavaScript Hoisting
//https://login.codingdojo.com/m/130/6412/45696

// GIVEN
// console.log(example);
// var example = "I'm the example!";

// AFTER HOISTING BY THE INTERPRETER
// var example; //variable declaration rise to the top like hot air ballons
// console.log(example); // logs undefined
// example = "I'm the example!"; //= is an anchor

// console.log(example);
// let example = "I'm the example!";    
1.
// console.log(hello);
// var hello = 'world';
// //AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello) //logs undefined
// hello = 'world';
2.
// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle); 
// }
//AFTER HOISTING BY THE INTERPRETER
// var needle;
// test();
// function test() {
//     var needle;
//     needle='magnet';
//     console.log(needle); //logs undefined
// }
// needle = 'haystack';

3.
// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

//AFTER HOISTING BY THE INTERPRETER
// var brendan;
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan='super cool';
// console.log(brendan); //log super cool
4.
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// //AFTER HOISTING BY THE INTERPRETER
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan); //logs reference error: brendan is not defined
5.
// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
//AFTER HOISTING BY THE INTERPRETER
// mean();
// var mean; 
// mean = function () { //TypeError: mean is not a function
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);
// console.log(food);
6.
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
//AFTER HOISTING BY THE INTERPRETER
// var genre;
// console.log(genre); //logs undefined
// genre = "disco";
// function rewind() {
//     genre = "rock";
//     console.log(genre); //logs rock
//     var genre = "r&b";
//     console.log(genre); //logs r&b
// }
// rewind();
// console.log(genre); //logs disco
7.
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
//AFTER HOISTING BY THE INTERPRETER
// dojo = "san jose";
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo); //logs seattle
//     dojo = "burbank";
//     console.log(dojo); //logs burbank
// }
// console.log(dojo); //logs san jose
// learn();
// console.log(dojo); //logs san jose
//san jose, seattle, burbank, san jose
8.
// Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
//AFTER HOISTING BY THE INTERPRETER
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now"; //TypeError: Assignment to constant variable
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
