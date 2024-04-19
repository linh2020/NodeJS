const express = require("express");
// const morgan = require("morgan");
const app = express();
const PORT = 5000;

// const logger = require("./logger.js");
// const authorize = require("./authorize.js");

// app.use([logger, authorize]);
// app.use(express.static("./public"));
// app.use(morgan("tiny"));

const { users } = require("./data.js");

app.get("/api/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
});

app.listen(PORT, () =>
  console.log(`Express server is listening on port ${PORT}`)
);
