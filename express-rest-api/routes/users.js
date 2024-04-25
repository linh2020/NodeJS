const express = require("express");
const router = express.Router();
const data = require("../data.js");

router.get("/", (req, res) => {
  res.json(data.users);
});

router.get("/:userID", (req, res) => {
  const userID = Number(req.params.userID);
  const user = data.users.find((user) => user.id === userID);
  res.json(user);
});

module.exports = router;
