const mongoose = require('mongoose');
//git test
//the schema - the rules that the entries in the DB must follow
const ProductSchema = new mongoose.Schema({
    title: String, 
    description: String,
    price: Number,
}, {timestamps: true});
 
// the model - this is what we use to make the actual queries to the DB
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
