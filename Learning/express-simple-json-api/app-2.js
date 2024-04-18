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

// /:productID
app.get("/api/products/:productID", (req, res) => {
  console.log(req.params);
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }

  return res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Multiple properties in params.");
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);

  const { search, limit } = req.query;
  let sortedProducts = [...products];

  // Customize products return
  sortedProducts = sortedProducts.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    company: product.company,
  }));

  // console.log(sortedProducts);

  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.includes(search)
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1)
    res.status(200).json({ success: true, data: [] });
  else res.status(200).json(sortedProducts);

  // res.send("Hello world!");
});

app.listen(PORT, () =>
  console.log(`Express server is listening on port ${PORT}`)
);
