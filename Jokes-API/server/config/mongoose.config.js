const mongoose = require('mongoose');


module.exports = (DB_NAME) => {

    mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`)
        .then(() => console.log(`✅ CONNECTED TO ${DB_NAME}`))
        .catch(err => console.log(`❌ Cannot connect to ${DB_NAME}`, err))
}
