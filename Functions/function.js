// Functions

// ******************** Topics ************************

//! function declaration.

//* sample for function declaration - 1

// function functionName(parameters) {
// code to be executed
// }

//* example - 2

// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// greet("Engineer's"); // Output: Hello, Engineer's!

//* Key Features:

//* Hoisted: You can call the function before it is defined in the code because JavaScript hoists function declarations.

//* Named: The function has a name (greet in the example) that can be used to reference and call it.

//! function expression.

//* sample for function expression - 1.

// const functionName = function(parameters) {
// code to be executed
//   };

//* example - 2.

// const greet = function(name) {
//     console.log("Hello, " + name + "!");
//   };

//   greet("Bob"); // Output: Hello, Bob!

//! Arrow function ()=>{}.

//* sample for write arrow function - 1

// const functionName = (parameters) => {
// code to be executed
// };

//* example - 2.

// const arrowFunction = (greet) => {
//   console.log("hello " + greet + "!");
// };

// arrowFunction("Programmers");

//! Parameters vs arguments.

//* Parameters.

// function greet(name) {
// 'name' is a parameter
//   console.log("Hello, " + name + "!");
// }

//* Arguments.

// greet("Alice"); // 'Alice' is an argument

//! Default parameters.

//* 1.

// function functionName(param = defaultValue) {
// code
// }

//* 2.

// function greet(name = "Guest") {
//   console.log("Hello, " + name + "!");
// }

// greet(); // Output: Hello, Guest!
// greet("Alice"); // Output: Hello, Alice!

//* 3.

// function add(a = 1, b = 2) {
//   return a + b;
// }

// console.log(add()); // 3
// console.log(add(5)); // 7
// console.log(add(5, 10)); // 15

//! Rest parameters (...args).

//* 1.

// function functionName(...args) {
//   args is an array of all passed arguments
// }

//* 2.

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3)); // 6
// console.log(sum(5, 10, 15, 20)); // 50

//* 3.

// function greet(greeting, ...names) {
//     names.forEach(name => console.log(`${greeting}, ${name}`));
//   }

//   greet("Hello", "Alice", "Bob", "Charlie");
// Hello, Alice
// Hello, Bob
// Hello, Charlie

//! Return values.

//* 1.

// function functionName() {
//   return value;
// }

//* 2.

//   function add(a, b) {
//     return a + b;
//   }

//   const result = add(3, 4);
//   console.log(result); // 7

//* 3.

// function noReturn() {
//   let x = 10 + 5;
// }

// console.log(noReturn()); // undefined

// ******************** Keep Coding ************************
