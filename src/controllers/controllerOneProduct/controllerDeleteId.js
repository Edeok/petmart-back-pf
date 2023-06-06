const { Product } = require("../../db");
const { Op } = require("sequelize");

// DELETE /product/:idProduct
const deleteProductById = async (req, res) => {
  console.log("Deleting product by ID");
  const productId = req.params.id;
  console.log("Este es el ID por params: " + productId);

  try {
    // Buscar el producto por ID
    const product = await Product.findOne({
      where: {
        id: {
          [Op.eq]: productId,
        },
      },
    });

    if (!product) {
      // Producto no encontrado
      return res.status(404).json({ error: "Product not found" });
    }

    // Eliminar el producto
    await Product.destroy({
      where: {
        id: {
          [Op.eq]: productId,
        },
      },
    });

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  deleteProductById,
};
