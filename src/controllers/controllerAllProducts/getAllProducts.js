const { Product } = require("../../db");

const getAllProducts = async (req, res) => {
  console.log("Getting ALL product !!!");
  try {
    let allProducts = await Product.findAll();
    return res.json(allProducts);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
};
