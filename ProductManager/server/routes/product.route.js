const ProductController = require('../controllers/product.controller');
console.log(ProductController);

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.findOneSingleProduct);
    app.put("/api/products/:id", ProductController.updateExistingProduct);
    app.delete('/api/products/:id', ProductController.deleteAnExistingProduct);
}