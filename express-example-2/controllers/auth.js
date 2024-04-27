const login = (req, res) => {
  console.log(req.body);

  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome to ${name}`);
  }
  res.status(401).send("Please Provide Credentials");
};

module.exports = { login };
