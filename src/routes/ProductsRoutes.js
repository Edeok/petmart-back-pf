const routes = require('express').Router();


const {getProductByCategory} = require('../controllers/CategoryControllers');
const {getAllProducts} = require('../controllers/ProductsControllers');
const {getProductsByName} = require('../controllers/ProductsControllers');
const {getProductById} = require('../controllers/ProductsControllers');
const {createProduct} = require('../controllers/ProductsControllers');
const {updateProduct} = require('../controllers/ProductsControllers');
const {deleteProductById} = require('../controllers/ProductsControllers');



routes.get('/', getAllProducts);
routes.get('/:id', getProductById);
routes.post('/', createProduct);
routes.put('/:id', updateProduct);
routes.delete('/:id', deleteProductById);
routes.get('/name/:name', getProductsByName);
routes.get('/category/:category', getProductByCategory);











module.exports = routes;






