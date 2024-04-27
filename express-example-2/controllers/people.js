let { people } = require("../data.js");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
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
};

const createPersonPostman = (req, res) => {
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
};

const updatePerson = (req, res) => {
  console.log(req.params);
  console.log(req.body);
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person)
    return res
      .status(401)
      .json({ success: false, msg: `no person with id ${id}` });

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
};

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person)
    return res
      .status(401)
      .json({ success: false, msg: `no person with id ${req.params.id}` });

  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );

  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
