const { Product } = require("../../db");

//TODO  ------> PUT /product/:idProduct <-------//TODO  ------> GET /product/:idProduct <-------
const updateProduct = (req, res) => {
  console.log("Updating a product");
  const productId = req.params.id;
  const updatedProduct = req.body;
  Product.update(updatedProduct, { where: { id: productId } })
    .then(([rowsUpdated]) => {
      if (rowsUpdated === 0) {
        res.status(404).json({ error: "Product not found" });
      } else {
        res.json(updatedProduct);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = {
  updateProduct,
};
