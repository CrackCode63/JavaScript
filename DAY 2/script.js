// We are going to learn about variables in js
// Variables are used to store data in js
// For example
let name = "John";
// Explanation of the above example
// In the above example, we have declared a variable named "name" and assigned it a string value "John". The "let" keyword is used to declare a variable in js. The variable name is case sensitive and should not contain any spaces or special characters.
// Now, let's see how we can use this variable in our code
console.log(name); // Output: John

// Lets discuss about let, const and var.
// What is let in js?
// let is a keyword in js that is used to declare a variable. It is a block scope.

// What is const in js?
// const is a keyword in js that is used to declare a constant. It is also a block scope.

// What is var in js?
// var is a keyword in js that is used to declare a variable. It is a function scope

// Now, let's see the difference between let, const and var.
// let and const are block scope, while var is function scope.
// let and const are hoisted, while var is not hoisted.
// Understanding with the help of code.

var x = 10;

console.log(x); // outputs 10

function foo() {
  var y = 20;
  console.log(y); // outputs 20
}

foo();
console.log(y); // outputs undefined, because y is only accessible within the foo function

const PI = 3.14;

console.log(PI); // outputs 3.14

if (true) {
  const foo = 'bar';
  console.log(foo); // outputs "bar"
}

console.log(foo); // outputs undefined, because foo is only accessible within the if block






