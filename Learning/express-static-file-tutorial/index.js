const express = require("express");
const app = express();
const PORT = 5000;

// Express provides a built-in method to serve your static files:
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("Hello NodeJS");
});

app.listen(PORT, () =>
  console.log(`Express server is listening on port ${PORT}`)
);
