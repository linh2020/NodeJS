const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

let accounts = [
  {
    id: 1,
    username: "paulhal",
    role: "admin",
  },
  {
    id: 2,
    username: "johndoe",
    role: "guest",
  },
  {
    id: 3,
    username: "sarahjane",
    role: "guest",
  },
];

app.get("/accounts", (req, res) => {
  console.log(req.params);
  res.json(accounts);
});

app.get("/accounts/:id", (req, res) => {
  console.log(req.params);
  const accountId = Number(req.params.id);
  const getAccount = accounts.find((account) => account.id === accountId);

  if (!getAccount) {
    res.status(500).send("Account not found.");
  } else {
    res.json(getAccount);
  }
});

app.listen(5000, () =>
  console.log(`Express server currently running on port ${PORT}`)
);
