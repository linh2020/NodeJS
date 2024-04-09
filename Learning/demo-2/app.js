const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is Home page");
    return;
  }
  if (req.url === "/about") {
    res.end("This is About page");
    return;
  }
  res.end(`
    <h1>404 Not Found</h1>
    <p><a href='/'>Back Home</a></p>
  `);
});

server.listen(5000);
