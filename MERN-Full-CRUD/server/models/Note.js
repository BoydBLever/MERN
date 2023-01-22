const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "{PATH} must be present."],
        minlength: [3, "{PATH} must be at least 3 char long."]
    },
    content : {
        type: String,
        required: [true, "{PATH} must be present."],
    },
    isImportant : {
        type: Boolean,
        default: false,
    }
}, {timestamps: true})

// create the schema and export it
const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;
