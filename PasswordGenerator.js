var generatepassword = require("generate-password");
var password = generatepassword.generateMultiple(4, {
  length: 10,
  numbers: true,
});
console.log(password);
