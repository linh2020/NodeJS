const express = require("express");
const app = express();
const PORT = 5000;

const authRouter = require("./routes/auth.js");
const peopleRouter = require("./routes/people.js");

// static assets
app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json data
app.use(express.json());

// login router
app.use("/login", authRouter);

// people router
app.use("/api/people", peopleRouter);

// server listening
app.listen(PORT, () =>
  console.log(`Express server is listening on port ${{ PORT }}`)
);
