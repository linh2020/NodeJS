const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 5000;

const logger = require("./logger.js");
const authorize = require("./authorize.js");

// app.use([logger, authorize]);
// app.use(express.static("./public"));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(PORT, () =>
  console.log(`Express server is listening on port ${PORT}`)
);
