const express = require("express");
const router = express.Router();

// Controllers
const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// get all products
router.get("/", getProducts);

//get a single product
router.get("/:id", getSingleProduct);

// add a product
router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
