const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;

mongoose
  .connect(
    "mongodb+srv://cdevlinh:pGVWDLIIvtpxoTJL@cluster0.kqgwaxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () =>
      console.log(`Express server is listening on port ${PORT}`)
    );
  })
  .catch(() => console.log("Connection Failed!"));

app.get("/", (req, res) => {
  res.send("Test");
});