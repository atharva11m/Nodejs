const fs = require("fs");
fs.writeFileSync("data.txt", "This is FS Module");
fs.writeFile("data1.txt", "Hello World", (err) => {
  // if (err) {
  //   console.log(err);
  // } else {
  //   console.log("File has been written successfully");
  // }//.....this is long form of if else

  if (err) console.log(err);
  console.log("File Has been created Successfully");
});
