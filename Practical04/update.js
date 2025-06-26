const fs = require("fs");
// fs.appendFileSync("data.txt", "New Data");

fs.appendFile("data1.txt", "\n Hello Atharva", (err) => {
  if (err) console.log(err);
  console.log("Fiel has been appended successfully");
});
