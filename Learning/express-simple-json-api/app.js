const express = require("express");
const app = express();
const PORT = 5000;

const { products } = require("./data");

app.get("/", (req, res) => {
  //   res.json([{ name: "linh" }, { name: "david" }]);

  res.send("<h1>Home Page</h1><a href='/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

// /:id
app.get("/api/products/:id", (req, res) => {
  //   console.log(req.params);
  const productId = Number(req.params.id);
  const product = products.find((product) => product.id === productId);

  res.json(product);
});

app.listen(PORT, () =>
  console.log(`Express server is listening on port ${PORT}`)
);
