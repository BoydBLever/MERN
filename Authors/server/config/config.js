const mongoose = require('mongoose');

module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
    .then(() => console.log(`✅ CONNECTED TO ${DB}`))
    .catch(err => console.log(err))
}

//now, the server needs to call this file