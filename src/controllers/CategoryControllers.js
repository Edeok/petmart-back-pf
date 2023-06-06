const { Product } = require('../db');

const getProductByCategory = async (req, res) => {
    console.log("GET CATEGORY:!!!")
  try {
    const { category } = req.query;

    const products = await Product.findAll({
      where: {
        category: category
      }
    });

    if (products.length === 0) {
      return res.status(404).json({ error: "No products found for the specified category" });
    }

    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProductByCategory
};

