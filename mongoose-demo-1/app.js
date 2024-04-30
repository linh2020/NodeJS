const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;

const productRoute = require("./routes/product.route.js");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Product route
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
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
