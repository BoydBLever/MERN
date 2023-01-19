// import mongoose to build the model
const mongoose = require('mongoose');
// the schema - the rules that the entries in the DB must follow
const JokeSchema = new mongoose.Schema({
    joke: {
        name: {
            type: String,
            required: [true,"must have a {PATH}"],
            minlength: [3, "{PATH} must have at least 3 chars but you gave it {VALUE}"]
        },
        punchline: {
            type: String,
            required: [true, "Joke must have a punchline!"]
        },
        isFunny: {
            type: Boolean,
            default: false
        }
    },
}, {timestamps:true});
// the model - this is what we use to make the queries to the DB
const joke = mongoose.model('Joke', JokeSchema);
//export the model
module.exports = joke;
