const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    const myUrl = url.parse(req.url, true);
    console.log(myUrl.search);
    res.write("Response From Server");
    res.end();
  })
  .listen(4000, "localhost", () => {
    console.log("Our Server is Running");
  });
