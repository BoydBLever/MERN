// == CRUD ==
// import the model to make queries to the DB
const Author = require("../models/Author")

module.exports = {
    //READ ALL
    findAll : (req, res) => {
        Author.find().sort({name: 1})
        .then(allAuthors => {
            console.log(allAuthors.length);
            res.json(allAuthors);
        })
        .catch(err => res.json(err))
    },
    // CREATE
    create : (req, res) => {
        //pass in body data
        console.log(req.body);
        Author.create(req.body)
        .then(newAuthor => {
            res.json(newAuthor)
        })
        .catch(err=> res.status(400).json(err))
    },
    // READ ONE
    findOne : (req, res) => {
        console.log(req.params.id);
        Author.findById(req.params.id)
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err=>res.json(err))
    },
    // UPDATE
    update : (req, res) => {
        console.log("UPDATE ID:", req.params.id);
        console.log("req.body:", req.body);
        Author.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err=> res.status(400).json(err))
    },
    // DELETE
    delete : (req, res) => {
        console.log(req.params.id);
        Author.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
}