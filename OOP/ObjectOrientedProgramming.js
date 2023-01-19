const user1 = {
    name: "Kermit",
    email: "kermit@sesame.org"
}
console.log(user1); //logs { name: 'Kermit', email: 'kermit@sesame.org' }

// Destructuring
const { name, email } = user1;
console.log(name); //logs Kermit
console.log(email); //logs kermit@sesame.org

// Nesting objects is an essential concept to master.

const user1 = {
    name: "Kermit",
    email: "kermit@sesame.org",
    friend: {
        name: "Miss Piggy",
        email: "piggy@sesame.org"
    }
}