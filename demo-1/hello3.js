function Person() {
  this.message = "Hello from Hello3.js";
  this.sayHello = function (param) {
    console.log(this.message);
  };
}

module.exports = Person;
