const fs = require("node:fs");
const path = require("node:path");
fs.appendFile(path.join(__dirname, "welecome.txt"), "Hello Node", (err) => {
  if (err) throw err;
  console.log("file created");
  fs.rename("welecome.txt", "hello.txt", () => {
    console.log(" File renamed!");
    fs.readFile(path.join(__dirname, "hello.txt"), "utf-8", (err, data) => {
      if (err) {
        return console.error(err);
      }
      console.log(data);
    });
  });
});
