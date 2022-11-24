// Call //
var person = {
  fName: "S",
  lName: "Surya",
};

function foo(greet) {
  console.log(`${greet} ${this.fName} ${this.lName}`);
}

foo.call(person, "Hello");

// Apply //
var person = {
  fName: "S",
  lName: "Surya",
};

function foo(greet) {
  console.log(`${greet} ${this.fName} ${this.lName}`);
}

foo.call(person, ["Hello"]);

// Bind //
var person = {
  fName: "S",
  lName: "Surya",
};

function foo() {
  console.log(`Hello ${this.fName} ${this.lName}`);
}

var sayHelloSurya = foo.bind(person);
sayHelloSurya();
