const fs = require("fs");
// fs.cpSync("Data4.txt", "Data5.txt");

fs.cp("Data1.txt", "Data6.txt", (err) => {
  if (err) console.log(err);
  console.log("Copied Successfully");
});
