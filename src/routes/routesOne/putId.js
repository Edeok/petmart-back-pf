const { Router } = require("express");
const router = Router();

const {
  updateProduct,
} = require("../../controllers/controllerOneProduct/controllerPutId");
//TODO -----> PUT /product/:id
router.put("/:id", updateProduct);

module.exports = router;
