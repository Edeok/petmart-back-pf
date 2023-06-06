const { Router } = require("express");
require("dotenv").config();
const router = Router();

const getAllProducts = require("./routesAllProducts/getAllProducts");
const getId = require("./routesOne/getId");
const getByName = require("./routesOne/getByName");
const postId = require("./routesOne/postProduct");
const putId = require("./routesOne/putId");
const deleteId = require("./routesOne/deleteId");
const user = require("./user");

router.use("/products", getAllProducts);
router.use("/product", getId);
router.use("/productName", getByName);
router.use("/product", postId);
router.use("/product", putId);
router.use("./product", deleteId);
router.use("/user", user);

module.exports = router;
