const express = require("express");

const app = express();

const getUser = () => undefined;

app.get("/test", async (req, res) => {
  try {
    const user = getUser();

    if (!user) {
      throw new Error("User not found");
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({ success: false, msg: error.message });
    // res.status(400).send(error.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const user = getUser();

    if (!user) {
      throw new Error("User not found");
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({ success: false, msg: error.message });
    // res.status(400).send(error.message);
  }
});

app.listen(5000, () => console.log(`Server listening on port 5000`));
