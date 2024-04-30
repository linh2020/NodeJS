const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;

const Product = require("./models/product.model.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// mongodb+srv://[username:password@]host[/[defaultauthdb][?options]]
// cluster: backenddb
// database-name: CdevPhoneStore
// mongodb+srv://cdevlinh:<password>@backenddb.yqclkwv.mongodb.net/[database-name]?retryWrites=true&w=majority&appName=BackendDB
mongoose
  .connect(
    "mongodb+srv://cdevlinh:pGVWDLIIvtpxoTJL@backenddb.yqclkwv.mongodb.net/CdevPhoneStore?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");

    app.listen(PORT, () =>
      console.log(`Express server is listening on port ${PORT}`)
    );
  })
  .catch(() => console.log("Connection Failed!"));
