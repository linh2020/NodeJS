const express = require("express");
const app = express();
const PORT = 5000;

const { products } = require("./data");

app.get("/", (req, res) => {
  //   res.json([{ name: "linh" }, { name: "david" }]);
  res.json(products);
});

app.listen(PORT, () =>
  console.log(`Express server is listening on port ${PORT}`)
);
