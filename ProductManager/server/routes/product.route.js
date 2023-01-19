const ProductController = require('../controllers/product.controller');
console.log(ProductController);

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.findOneSingleProduct);
    app.put("/api/products/:id", ProductController.updateExistingProduct);
    app.delete('/api/products/:id', ProductController.deleteAnExistingProduct);
}

// postman add first product
// {
//     "product": {
//         "title": "First Product",
//         "description": "Useful widget",
//         "price": 100,
//         "_id": "63c9015362487729511be97c",
//         "createdAt": "2023-01-19T08:37:39.046Z",
//         "updatedAt": "2023-01-19T08:37:39.046Z",
//         "__v": 0
//     }
// }