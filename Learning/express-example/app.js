const express = require("express");
const serveIndex = require("serve-index");

const app = express();

app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.use("/request-type", (req, res, next) => {
  console.log("Request-type: ", req.method);
  //   res.send(req.url);
  next();
});

app.use("/public", express.static("public"));
app.use("/public", serveIndex("public"));

app.get("/", (req, res) => {
  res.send("Successful response!");
});

app.get("/:request-type", (req, res) => {
  console.log(req.params);
  res.send(`${req.url} - ${req.method}`);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000.");
});
