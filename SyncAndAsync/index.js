var fs = require("fs");
// var data = fs.readFileSync("info.txt", "utf-8");
// console.log(data);
// console.log(".....ENDING STATEMENT");

fs.readFile("info.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log(".....ENDING STATEMENT");
