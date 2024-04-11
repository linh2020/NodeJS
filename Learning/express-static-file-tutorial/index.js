const express = require("express");
const app = express();
const PORT = 5000;

// Express provides a built-in method to serve your static files:
app.use(express.static("public"));



app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () =>
  console.log(`Express server is listening on port ${PORT}`)
);
