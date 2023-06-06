const { Router } = require("express");
const router = Router();

const {
  getAllProducts,
} = require("../../controllers/controllerAllProducts/getAllProducts");

//TODO --------> GET /products <-----------
router.get("/", getAllProducts);

module.exports = router;
