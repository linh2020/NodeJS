const express = require("express");
const router = express.Router();

const { login } = require("../controllers/auth.js");

router.post("/", login);

// router.route("/").post(login);

module.exports = router;
