//--CONTROLLER
// making queries to the DB
// using the model
// so, we have to import the model
const Joke = require('../models/joke.model');

//make ALL THE CRUD!
//READ ALL
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allDaJokes) => {
            res.json(allDaJokes) //[]
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
// CREATE
module.exports.createJoke = (req, res) => {
    // const {name, punchline, isFunny} = req.body;
    Joke.create({
        name,
        punchline,
        isFunny
    })
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ joke: newlyCreatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
// FIND ONE
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id }) //grabbing the mongo id
        .then(oneSingleJoke => {
            res.json({ joke: oneSingleJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
 // UPDATE
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
// DELETE by id
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
