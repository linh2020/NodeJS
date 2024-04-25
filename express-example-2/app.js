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
  console.log(req.body);
  const newUser = req.body;
  if (!newUser) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({
    success: true,
    msg: "Form Submitted Successfully",
    data: [...people, newUser],
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

app.put("/api/people/:id", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person)
    res.status(401).json({ success: false, msg: `no person with id ${id}` });

  // const updatedPeople = people.map((person) =>
  //   person.id === Number(id) ? (person.name = name) : person
  // );

  const updatedPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
    //
  });

  res.json({ success: true, data: updatedPeople });
});

app.listen(PORT, () =>
  console.log(`Express server is listening on port ${{ PORT }}`)
);
