const http = require("http");

const server = http.createServer((req, res) => {
  //
  //   console.log(`Client hit the server!`);

  //   console.log(req.method);
  //   console.log(req.url);

  //   res.writeHead(200, { "content-type": "text/html" });

  //   res.write("<h1>Welcome To Node JS !!!</h1>");

  //   res.end();

  const url = req.url;
  console.log(url);

  switch (url) {
    case "/":
      {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>Home Page</h1>");
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
