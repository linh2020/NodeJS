const express = require("express");
const app = express();
const PORT = 5000;

const routerProducts = require("./routes/products");
const routerUsers = require("./routes/users.js");

app.use(express.json());

app.use("/products", routerProducts);

app.use("/users", routerUsers);

app.listen(PORT, () =>
  console.log(`Express server is listening on port ${{ PORT }}`)
);
