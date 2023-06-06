const { Router } = require("express");
const router = Router();

const {
  createProduct,
} = require("../../controllers/controllerOneProduct/controllerPost");

//TODO -----> POST /product
router.post("/", createProduct);

module.exports = router;
