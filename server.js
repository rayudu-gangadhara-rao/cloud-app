const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Expecting the new output");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});