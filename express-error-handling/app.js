const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  return res.status(200).json({ success: true });
});

app.listen(5000, () => console.log(`Server listening on port 5000`));
