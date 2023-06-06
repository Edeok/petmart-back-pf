const { Product } = require("../../db");

//TODO  ------> GET /product/:idProduct <-------
const getProductById = (req, res) => {
  console.log("Getting product by ID");
  const productId = req.params.id;
  Product.findByPk(productId)
    .then((product) => {
      if (!product) {
        res.status(404).json({ error: "Product not found" });
      } else {
        res.json(product);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = {
  getProductById,
};
