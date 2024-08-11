// Let's discuss about var, const and var

// var is a variable that can be changed
// it can also be redeclared.
var x = 10;
x = 20;
console.log(x); // Output: 20

// const is a variable that cannot be changed
const y = 10;
// y = 20; // Error: Assignment to constant variable.
console.log(y); // Output: 10

// let is a variable that can be changed
// let is block scoped variable.
let z = 10;
z = 20;
console.log(z); // Output: 20

