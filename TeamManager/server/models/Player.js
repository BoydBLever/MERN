//player has a name and a position
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
    status: {
        type: [Number],
        default: [0,0,0],
        required: false
    }
 }, {timestamps: true})

    const Player = mongoose.model("Player", PlayerSchema);
    module.exports = Player;
