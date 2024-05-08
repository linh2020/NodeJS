const express = require("express");

const app = express();

// The express' built-in middleware express.urlencoded() to process URL encoded fields submitted through a HTTP form object:
app.use(express.urlencoded({ extended: false }));

// Using express.static for Serving Static Assets
// The express.static built-in middleware function to serve static files such as images, CSS files, and JavaScript files.
app.use(express.static("public"));

// Using express.json for Parsing JSON Payloads
// The express.json built-in middleware function to JSON content received from the incoming requests.
// configured a maximum size of 100 bytes for the JSON request.
// app.use("/products", express.json({ limit: 100 }));

// Adding a Middleware Function for Error Handling
// Error handling Middleware functions
// const errorLogger = (err, req, res, next) => {
//   console.log(`err: ${err.message}`);

//   // console.log("Error:", err); // Log the error object
//   // console.log("Request:", req.url); // Log the request URL

//   next(err); // calling next middleware
// };

// const errorResponder = (err, req, res, next) => {
//   res.header("Content-Type", "application/json");

//   const status = err.statusCode || 400;
//   res.status(status).json({ statusCode: status, message: err.message });

//   // console.log("Error:", err); // Log the error object
//   console.log("Request:", req.url); // Log the request URL
// };

const invalidPathHandler = (err, req, res, next) => {
  const errorMessage = err.message || "Invalid path";
  res.setHeader("Content-Type", "application/json");
  res.status(400).json({ success: false, message: errorMessage });
};

app.get("product", (req, res) => {
  res.render("index.html");
});

// Route for handling get request for path /
app.get("/", (req, res) => {
  res.status(200).send("response for GET request");
  // res.status(200).render("index.html");
});

// Route for handling post request for path /products
app.post(
  "/products",

  // first function in the chain will check for JSON content
  requireJsonContent,

  // second function will check for valid product price in the request if the first function detects JSON
  (req, res) => {
    // JSON payload is parsed to extract the fields name, brand, and price

    // sample JSON request
    // {"name":"furniture", "brand":"century", "price":1067.67}

    const products = [];

    // Extract name, brand, price of product
    const { name } = req.body;
    const { brand } = req.body;
    const { price } = req.body;

    if (Number(price) < 5000)
      res.status(400).json({ success: false, msg: "Wrong price" });

    console.log(`Name: ${name}, brand: ${brand}, price: ${price}`);
    res.status(201).json({ success: true, data: req.body });
  }
);

app.get("/productswitherror", (req, res) => {
  let err = new Error(`processing error in request at ${res.url}`);
  err.statusCode = 500;
  throw err;
});

// app.use(errorLogger);
// app.use(errorResponder);
app.use(invalidPathHandler);

// start the server
app.listen(5000, () => console.log(`Server listening on port 5000`));

// Adding a Middleware Function to a Route
function requireJsonContent(req, res, next) {
  if (req.headers["content-type"] !== "application/json") {
    return res
      .status(400)
      .json({ success: false, msg: `Server requires application/json` });
  } else {
    next();
  }
}
