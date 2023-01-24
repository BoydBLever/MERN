//player has a name and a position
// namee has a type, it is required, and there is a minlength
const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '{ PATH } must be present.'],
        minlength: [3, '{ PATH } must be at least three letters.']
    },
    position: {
        type: String,
        required: [true, '{ PATH } required.'],
        minlength: [2, '{ PATH } min is two letters.']
    }}, {timestamps: true})

    const Player = mongoose.model("Player", PlayerSchema);
    module.exports = Player;
