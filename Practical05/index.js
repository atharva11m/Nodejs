const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.write("Response From Server");
  res.end();
});
server.listen(3000, "localhost", () => {
  console.log(`Server Running`);
});
