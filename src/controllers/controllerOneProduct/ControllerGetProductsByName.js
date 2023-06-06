const { Product } = require("../../db");
const { Op } = require("sequelize");
//TODO  ------> GET /productName/name?query <-------//TODO  ------> GET /product/name/name?=query
const getProductsByName = async (req, res) => {
  console.log("Getting product by NAME");
  try {
    const productName = req.query.name;
    console.log("Este es el query:" + productName);
    const productFoundDb = await Product.findAll({
      where: {
        name: {
          [Op.iLike]: productName,
        },
      },
    });

    if (productFoundDb.length > 0) {
      return res.json(productFoundDb);
    } else {
      return res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProductsByName,
};
