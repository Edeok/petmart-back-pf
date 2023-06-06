const { Product } = require("../../db");

//TODO  ------> POST /product <-------
const createProduct = (req, res) => {
  console.log("Creating a new product");
  const newProduct = req.body;
  Product.create(newProduct)
    .then((product) => {
      res.status(201).json(product);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = {
  createProduct,
};
