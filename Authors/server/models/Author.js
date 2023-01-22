const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "{PATH} must be present."],
        minlength: [3, "{PATH} must be at least three letters."]
    }
}, {timestamps: true})

//create the schema and export it
module.exports.Author = mongoose.model("Author", AuthorSchema);
