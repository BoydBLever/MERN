// == CRUD ==
// import the model to make queries to the DB
const Player = require("../models/Player")

module.exports = {
    //READ ALL
    findAll : (req, res) => {
        Player.find().sort({name: 1})
        .then(allPlayers => {
            console.log(allPlayers.length);
            res.json(allPlayers);
        })
        .catch(err => res.json(err))
    },
    // CREATE
    create : (req, res) => {
        //pass in body data
        console.log(req.body);
        Player.create(req.body)
        .then(newPlayer => {
            res.json(newPlayer)
        })
        .catch(err=> res.status(400).json(err))
    },
    // READ ONE
    findOne : (req, res) => {
        console.log(req.params.id);
        Player.findById(req.params.id)
        .then(onePlayer => res.json(onePlayer))
        .catch(err=>res.json(err))
    },
    // UPDATE
    update : (req, res) => {
        console.log("UPDATE ID:", req.params.id);
        console.log("req.body:", req.body);
        Player.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err=> res.status(400).json(err))
    },
    // DELETE
    delete : (req, res) => {
        console.log(req.params.id);
        Player.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
}
