const {Router} = require("express");
const productsRouter = require('./ProductsRoutes')

const routes = Router();


routes.use('/products', productsRouter);



module.exports = routes;