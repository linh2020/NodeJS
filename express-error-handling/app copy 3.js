const express = require("express");

const app = express();

// Route for handling get request for path /
app.get("/", (req, res) => {
  res.status(200).send("response for GET request");
});

// Route for handling post request for path /products
app.post("/products", (req, res) => {
  // ...
  res.send(201).json({});
});

// start the server
app.listen(5000, () => console.log(`Server listening on port 5000`));
