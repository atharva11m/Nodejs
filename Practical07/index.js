const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // console.log(req.url);
    if (req.url === "/") {
      res.write("<h1>THIS IS HOME PAGE</h1>");
      res.end();
    } else if (req.url === "/about") {
      fs.readFile("./public/about.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
      });
    } else if (req.url === "/contact") {
      fs.readFile("./public/contact.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
      });
    } else {
      res.write("<h1>PAGE NOT FOUND</h1>");
      res.end();
    }
  })
  .listen(3000, "localhost", () => {
    console.log("Server is Running");
  });
