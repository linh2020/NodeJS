const express = require("express");
const router = express.Router();
const data = require("../data.js");

router.get("/", (req, res) => {
  res.json(data.products);
});

router.get("/:productID", (req, res) => {
  console.log(req.params);
  const productID = Number(req.params.productID);
  const product = data.products.find((product) => product.id === productID);
  res.json(product);
});

module.exports = router;
