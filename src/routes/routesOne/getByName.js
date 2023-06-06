const { Router } = require("express");
const router = Router();

const {
  getProductsByName,
} = require("../../controllers/controllerOneProduct/ControllerGetProductsByName");

//TODO -----> GET /productName/name?name="..."
router.get("/name", getProductsByName);

module.exports = router;
