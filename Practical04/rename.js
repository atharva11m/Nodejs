const fs = require("fs");

// fs.renameSync("data.txt", "Data.txt");

fs.rename("data1.txt", "Data1.txt", (err) => {
  if (err) console.log(err);
  console.log("Renamed Successfully");
});

// fs.rename("data.txt", "New/Data2.txt", (err) => {
//   if (err) console.log(err);
//   console.log("Moved Successfully");
// });
//Using rename method can rename the file but also move the file into another folder
