const http = require("http");
const fs = require("fs");

// get all files
const homePage = fs.readFileSync("./navbar-app/index.html");
const homeStyle = fs.readFileSync("./navbar-app/styles.css");
const homeImage = fs.readFileSync("./navbar-app/logo.svg");
const homeLogic = fs.readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  //
  const url = req.url;
  console.log(url);

  switch (url) {
    case "/":
      {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(homePage);
        res.end();
      }
      break;

    case "/styles.css":
      {
        res.writeHead(200, { "content-type": "text/css" });
        res.write(homeStyle);
        res.end();
      }
      break;

    case "/browser-app.js":
      {
        res.writeHead(200, { "content-type": "text/javascript" });
        res.write(homeLogic);
        res.end();
      }
      break;

    case "/logo.svg":
      {
        res.writeHead(200, { "content-type": "image/svg+xml" });
        res.write(homeImage);
        res.end();
      }
      break;

    default: {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>404 - Page Not Found</h1>");
      res.end();
    }
  }
});

server.listen(5000);
