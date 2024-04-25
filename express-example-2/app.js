const express = require("express");
const app = express();
const PORT = 5000;

let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json data
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res
    .status(201)
    .json({ success: true, msg: "Form Submitted Successfully", person: name });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({
    success: true,
    msg: "Form Submitted Successfully",
    data: [...people, name],
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);

  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome to ${name}`);
  }
  res.status(401).send("Please Provide Credentials");
});

app.listen(PORT, () =>
  console.log(`Express server is listening on port ${{ PORT }}`)
);
