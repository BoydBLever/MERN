// player has a name, position and status
// namee has a type, it is required, and there is a minlength
const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name required.'],
        minlength: [2, 'Minimum name is two letters.']
    },
    position: {
        type: String,
        required: false
    }, 
    game1: {
        type: String,
        default: "undecided"
    },
    game2: {
        type: String,
        default: "undecided"
    },
    game3: {
        type: String,
        default: "undecided"
    },

 }, {timestamps: true})

    const Player = mongoose.model("Player", PlayerSchema);
    module.exports = Player;
