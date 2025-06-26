const url = require("url");

const adr =
  "https://www.example.com/category/search?name=Atharva&age=24#section3";

const myUrl = url.parse(adr, true);
console.log(myUrl.protocol);
console.log(myUrl.hash);
console.log(myUrl.pathname);
console.log(myUrl.path);
console.log(myUrl.hostname);
console.log(myUrl.port);
