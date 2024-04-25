const http = require("http");
const fs = require("fs");

// get all files
const homePage = fs.readFileSync("./index.html");

// index.html content
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Home Page</h1>
    <h4>Hello from home page</h4>
  </body>
</html>
 */

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

    case "/about":
      {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>About Page</h1>");
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
