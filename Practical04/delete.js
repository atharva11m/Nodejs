const fs = require("fs");

fs.unlinkSync("data.txt");

fs.unlink("data1.txt", (err) => {
  if (err) console.log(err);
  console.log("Deleted Successfully");
});
