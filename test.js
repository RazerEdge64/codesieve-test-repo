console.log('Hi there, CodeSieve!');

// Old logging
console.log("Checking diff-pr-pipeline");
console.log("Checking new PR difference with the parser");

// Dummy function
function sum(a, b) {
  return a + b;
}

// Add a new feature
function greetUser(name) {
  if (!name) {
    console.log("Hello, guest!");
  } else {
    console.log(`Hello, ${name}`);
  }
}

// Simulate a bug
function buggyLogic(x) {
    if (x === 5) {
    console.log("X is 5");
  }
}

// Add this new feature
function shoutUser(name) {
    console.log("HELLO " + name.toUpperCase() + "!!!");
  }

greetUser("Shubhang");
buggyLogic(4);
shoutUser("CodeSieve");
