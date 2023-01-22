// == CRUD ==
// import the model to make queries to the DB
const Note = require("../models/Note") //returns a note object

module.exports = {
    // READ ALL
    // findAll is the key
    findAll : (req, res) => {
        Note.find()
            .then(allDaNotes => {
                res.json(allDaNotes)
            })
            .catch(err => res.json(err))
    },

    //CREATE
    // create is the key
    create : (req, res) => {
        // passs in body data
        console.log(req.body);
        Note.create(req.body)
            .then(newNote => {
                res.json(newNote)
            })
            .catch(err => Response.status(400).json(err));
    },

    //READ ONE
    //findOne is the key
    findOne : (req, res) => {
        console.log(req.params.id);
        // Note.find({_id:req.params.id})
        Note.findById(req.params.id)
        .then(oneNote => res.json(oneNote))
        .catch(err => res.json(err))
    },

    //UPDATE
    update : (req, res) => {
        console.log("UPDATE id:", req.params.id);
        console.log("req.body:", req.body);
        Note.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true })
            .then(updatedNote => res.json(updatedNote))
            .catch(err => res.json(err))
    },

    //DELETE
    delete: (req, res) => {
        console.log(req.params.id);
        Note.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    }
}