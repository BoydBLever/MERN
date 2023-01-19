const Product = require('../models/product.model');
 
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allDaProducts) => {
            res.json(allDaProducts) 
        })
        .catch((err) => {
            res.json({ message: '❌', error: err })
        });
}

module.exports.createProduct = (req, res) => {
    //db.products.insertOne({name:"", description: "", price: ""})
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ product: newlyCreatedProduct })
        })
        .catch((err) => {
            res.json({ message: '❌', error: err })
        });}

module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(theProduct => {
            res.json({ product: theProduct })
        })
        .catch((err) => {
            res.json({ message: '❌', error: err })
        });}


module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ product: updatedProduct })
        })
        .catch((err) => {
            res.json({ message: '❌', error: err })
        });}
 
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: '❌', error: err })
        });}
