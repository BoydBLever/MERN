const mongoose = require('mongoose');
//git test
//the schema - the rules that the entries in the DB must follow
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must have a {PATH}."],
        minlength: [3, "{PATH} must have at least 3 chars, but you only gave {VALUE}"]
    }, 
    description: {
        type: String,
        required: [true,"Must include a description."],
        minLength: [10,"{PATH} must have 10 chars, but you only gave {VALUE}"]
    },
    price: {
        type: Number,
        required: [true, "Please include a price."]
    }
}, {timestamps: true});
 
// the model - this is what we use to make the actual queries to the DB
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
