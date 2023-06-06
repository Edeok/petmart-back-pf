const { Product } = require("../../db");

// DELETE /product/:idProduct
const deleteProductById = async (req, res) => {
  console.log("Deleting product by ID");
  const productId = req.params.idProduct;

  try {
    // Buscar el producto por ID
    const product = await Product.findOne({
      where: {
        id: productId,
      },
    });

    if (!product) {
      // Producto no encontrado
      return res.status(404).json({ error: "Product not found" });
    }

    // Eliminar el producto
    await Product.destroy({
      where: {
        id: productId,
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
