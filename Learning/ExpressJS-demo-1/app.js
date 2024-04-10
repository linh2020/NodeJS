const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("404 - Resource not found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
