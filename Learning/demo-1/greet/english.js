const greet = require("./greetings.json");

const sayHello = function (param) {
  console.log(greet.en);
};

module.exports = sayHello;
