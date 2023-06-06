const { Router } = require("express");
const router = Router();

const {
  deleteProductById,
} = require("../../controllers/controllerOneProduct/controllerDeleteId");

//TODO -----> DELETE /product/:id
router.delete("/:id", deleteProductById);

module.exports = router;
