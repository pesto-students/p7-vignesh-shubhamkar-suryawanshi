var person = {
  fName: "S",
  lName: "Surya",
};

// Call //

function foo(greet) {
  console.log(`${greet} ${this.fName} ${this.lName}`);
}
foo.call(person, "Hello");

// Apply //

function foo(greet) {
  console.log(`${greet} ${this.fName} ${this.lName}`);
}
foo.apply(person, ["Hello"]);

// Bind //

function foo() {
  console.log(`Hello ${this.fName} ${this.lName}`);
}
var sayHelloSurya = foo.bind(person);
sayHelloSurya();
