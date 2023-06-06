const { Router } = require("express");
const router = Router();

const {
  getProductById,
} = require("../../controllers/controllerOneProduct/controllerGetId");

router.get("/:id", getProductById);
//TODO -----> GET http://localhost:3002/product/:id

module.exports = router;
