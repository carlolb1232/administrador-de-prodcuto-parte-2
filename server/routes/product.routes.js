const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
  app.get('/api/products', ProductController.getAllProducts);  
  app.get('/api/product/:id', ProductController.getOneProduct);
  app.post('/api/product/new', ProductController.createProduct);
};