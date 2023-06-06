const { Product } = require('../db');
const { sequelize } = require('../db');
//const data = require("../utils/Data")
const {Op} = require('sequelize');


const data = require('../utils/Data');

console.log('data:¡¡¡¡', data)

 //Método estático para sincronizar el modelo y guardar los datos
const syncAndSaveData = async () => {
  console.log("SYNC SABE DATA !!!");
  try {
    await sequelize.sync();
    console.log("Model synchronized with database");



    await Product.bulkCreate(data, { validate: true });

    console.log("Data saved to database");
  } catch (error) {
    console.error("Error synchronizing model with database:", error);
  }
};

// Llamada al método syncAndSaveData para sincronizar el modelo y guardar los datos
syncAndSaveData();



// Obtener todos los productos
const getAllProducts = async (req, res) => {
  console.log("Getting ALL product !!!");
  try {
    let allProducts = await Product.findAll();
    return res.json(allProducts);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getProductsByName = async (req, res) => {
  console.log("Getting product by NAME");
  try {
    const { name } = req.query;
    const productFoundDb = await Product.findOne({
      where: {
        name: {
          [Op.iLike]: name
        }
      }
    });

    if (productFoundDb) {
      return res.json(productFoundDb);
    } else {
      return res.status(404).json({ error: "Product not found" });
    }

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};





// Obtener un producto por su ID
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






// Crear un nuevo producto
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

// Actualizar un producto existente
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
const deleteProductById = (req, res) => {
  console.log("Deleting product by ID");
  const productId = req.params.id;
  Product.destroy({
    where: {
      id: productId
    }
  })
    .then((rowsDeleted) => {
      if (rowsDeleted === 0) {
        res.status(404).json({ error: "Product not found" });
      } else {
        res.json({ message: "Product deleted successfully" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};


module.exports = {
   getAllProducts,
   getProductById,
   getProductsByName,
   createProduct,
   updateProduct,
   deleteProductById,
  
};

