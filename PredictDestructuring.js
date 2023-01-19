//Go to line 59 for the start of Predict Destructuring Core Assignment
// According to Mozilla, "destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects into distinct variables

// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     createdAt: 1543945177623
// };
// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// BEFORE ES6
// var email = person.email;
// var firstAnimal = animals[0];
// AFTER ES6
// const { email, password} = person;
// const [firstAnimal] = animals;
// console.log(email);
// // => bob@marley.com
// console.log(password);
// // => sekureP@ssw0rd9
// console.log(firstAnimal);
// => horse
// const hashedPassword = person.password;
// console.log(hashedPassword);
//When destructuring from objects the property names must be matched exactly
1.
// Naming conflicts
// const password = '12345';
// const { password: hashedPassword } = person;
// Specifying the property name, password, will access the value of that property on our object. The colon : after the property name followed by your new variable redirects the value of password to be held in hashedPassword, thereby eliminating the aforementioned identifier conflict.
2.
// Nested Destructuring
// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     addresses: [
//         {
//             address: '1600 Pennsylvania Avenue',
//             city: 'Washington, D.C.',
//             zipcode: '20500',
//         },
//         {
//             address: '221B Baker St.',
//             city: 'London',
//             zipcode: 'WC2N 5DU',
//         }
//     ],
//     createdAt: 1543945177623
// };
// const { addresses: [ , { city: london }] } = person;
// console.log(london);
// => London
//For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.
1.
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars 
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar) //Tesla
// console.log(otherRandomCar) //Mercedes
2.
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name); //Reference Error: name is not defined
// console.log(otherName); //Elon
// 3.
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;
// //Predict the output
// console.log(password); //logs 12345
// console.log(hashedPassword); //undefined //Why?  does the person object have a password? Nope.
4.
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers; //2
// const [,,,second] = numbers; //5
// const [,,,,,,,,third] = numbers; //2
// //Predict the output
// console.log(first == second); //false
// console.log(first == third); //true
5.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key); //value
console.log(secondKey); //[1,5,1,8,3,3]
console.log(secondKey[0]); // 1
console.log(willThisWork); // 5











