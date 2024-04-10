const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url === "/cart.json");
  res.end("Hello NodeJS !!!!");
});

server.listen(5000, () => console.log("Server 5000 port"));
