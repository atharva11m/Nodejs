const fs = require("fs");
// const data = fs.readFileSync("data.txt", "utf-8");
// console.log(data);

fs.readFile("data1.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});
