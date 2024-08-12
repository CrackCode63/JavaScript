// Primitive Data types and Objects in Java
// =====================================================
// ### Primitive Data Types
// Java has eight primitive data types, which are the basic building blocks of the language. These types are
// *   `byte`: an 8-bit signed integer
// *   `short`: a 16-bit signed integer
// *   `int`: a 32-bit signed integer
// *   `long`: a 64-bit signed integer
// *   `float`: a 32-bit floating point number
// *   `double`: a 64-bit floating point number
// *   `boolean`: a boolean value (true or false)
// *   `char`: a single character

// There are seven primitive data types according to CWH
// 1. NULL 
// 2. NUMBER 
// 3. STRING
// 4. BOOLEAN
// 5. BYTE 
// 6. SYMBOL 
// 7. UNDEFINED 
// trick to learn : nn bb ss u


// Non-Primitive Data Types
// ==============================================
// ### Objects in Java
// In Java, objects are instances of classes. Classes are blueprints for creating objects. An object has properties (data) and methods (functions).
// Objects are created using the `new` keyword.
// For example, if we have a class called `Person`, we can create an object of that
// class like this: `Person person = new Person();`
// We can then access the properties and methods of the object using the dot notation, like this:
// `person.name = "John";`
// `person.age = 30;`
// `person.sayHello();`
// In Java, objects are reference types, which means they are stored in memory and referenced by a variable. When we create an object, we are creating a new instance of the class, and the object is stored in memory.

const item = {
    name: "John",
    age: 30,
}
console.log(item.name);
