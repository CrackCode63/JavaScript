// Practice set

// 1. Create a variable of type string and try to add a number to it.
let a = "123";
let b = 6;
console.log(a+b);

// 2. Use typeof() to find the data type of string used in last question 
let c = console.log(typeof(a));

// 3. Create a const object in javascript. Can you change it to hold a number later
const d = {
    name: "John"
};
d.name = 123;
console.log(d.name);

// 4. Write a js program to create a dictionary of 5 words.
const dic = {
    "apple": "fruit",
    "car": "vehicle",
    "tree": "plant",
    "house": "building",
    "dog": "animal"
};
console.log("The apple is:",dic.apple)
console.log("The car is:",dic.car)
console.log("The plant is:",dic.tree)
console.log("The house is:",dic.house)
console.log("The dog is:",dic.dog)