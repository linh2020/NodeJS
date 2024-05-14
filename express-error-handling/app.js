const express = require("express");
const ErrorHandler = require("./middlewares/errorHandler");
const tryCatch = require("./utils/tryCatch");

const app = express();

const getUser = () => undefined;

// Route for handling get request for path /
app.get("/test", async (req, res, next) => {
  try {
    const user = getUser();
    if (!user) {
      throw new Error("User not found");
    }
  } catch (error) {
    return next(error);
  }
  res.status(200).json({ success: true });
});

app.post(
  "/login",
  tryCatch((req, res) => {
    const user = getUser();
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).json({ success: true });
  })
);

app.use(ErrorHandler);

// start the server
app.listen(5000, () => console.log(`Server listening on port 5000`));
