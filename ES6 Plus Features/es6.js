// ES6 + Features

// ******************** 1$t Topic ************************

//! let vs const

// let

// let a = 89;
// a=98
// console.log(a);

// const

// const a = 10;
// a =20; // can't redeclare or change
// console.log(a);

// ******************** 2nd Topic ************************

//! template literals : ``

// const PORT = 3000;
// console.log(`Server is running on Port:${PORT}`); // Port:3000

// ******************** 3rd Topic ************************

//! Destructuring: Arrays & Objects

// Destructuring is a convenient way in JavaScript to unpack values from arrays or properties from objects into distinct variables.

//*Array Destructuring

//Syntax:
// const [first, second] = [10, 20];
// console.log(first);  // 10
// console.log(second); // 20

//Skipping elements:
// const [,, third] = [1, 2, 3];
// console.log(third); // 3

//Default values:
// const [a = 5, b = 10] = [undefined];
// console.log(a); // 5
// console.log(b); // 10

// Swapping variables:
// let x = 1, y = 2;
// [x, y] = [y, x];
// console.log(x, y); // 2, 1

// Rest operator:
// const [head, ...tail] = [1, 2, 3, 4];
// console.log(head); // 1
// console.log(tail); // [2, 3, 4]


//!  Object Destructuring

//Syntax:
// const user = { name: 'Ali', age: 25 };
// const { name, age } = user;
// console.log(name); // Ali
// console.log(age);  // 25

//Renaming variables:
// const { name: fullName } = user;
// console.log(fullName); // Ali

// Default values:
// const { gender = 'Not specified' } = user;
// console.log(gender); // Not specified

//Nested destructuring:
// const person = {
//     name: 'Sara',
//     address: {
//       city: 'Rawalpindi',
//       country: 'Pakistan'
//     }
//   };

//   const { address: { city } } = person;
//   console.log(city); // Rawalpindi

//Rest operator:
// const { name, ...rest } = user;
// console.log(rest); // { age: 25 }

// ******************** 4th Topic ************************

//! spread (...) and Rest (...) operators

//* 1. Spread Operator (...)
// Used to expand elements of an array or object.

//In Arrays:
// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];
// console.log(arr2); // [1, 2, 3, 4]

//In Objects:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3 };
// console.log(obj2); // { a: 1, b: 2, c: 3 }

//* In Functions (for spreading arguments):
// function sum(a, b, c) {
//     return a + b + c;
//   }
//   const nums = [1, 2, 3];
//   console.log(sum(...nums)); // 6

//! 2. Rest Operator (...)
// Used to gather remaining elements into an array or object.

//* In Arrays (Destructuring):
// const [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // 1
// console.log(rest);  // [2, 3, 4]

//* In Objects (Destructuring):
// const { a, ...others } = { a: 1, b: 2, c: 3 };
// console.log(a);      // 1
// console.log(others); // { b: 2, c: 3 }

//* In Functions (Rest Parameters):
// function sumAll(...numbers) {
//     return numbers.reduce((acc, val) => acc + val, 0);
//   }
//   console.log(sumAll(1, 2, 3, 4)); // 10

//* Summary:

//! Operator  ---	Purpose ---	Common Use Case
// ...	      ---    Spread	--- Expanding arrays/objects
// ...	      ---    Rest	--- Gathering into array/object


// ******************** 5th Topic ************************

//! import, export modules

//* import & export in JavaScript Modules

// Modern JavaScript (ES6+) uses modules to organize code across multiple files. The export and import keywords are used to share and use functions, variables, objects, or classes between files.

//* 1. export
// ./utils.js
//!  Named Export (you can have multiple):
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

//! Default Export (only one allowed per file):
// export default function log(message) {
//     console.log(message);
// }

//* 2. import

//!  Import Named Exports:

// import { add, subtract } from './utils.js';

// console.log(add(2, 3)); // 5

//! Import with Renaming:
// import { add as addition } from './utils.js';

//! Import Default Export:
// import log from './logger.js';

// console.log('Hello world'); // Hello world

//! Import All as Namespace:
// import * as utils from './utils.js';

// console.log(utils.add(4, 2)); // 6

//* Summary

// export               -----	import
// export const a = 1;	-----   import { a } from './file';
// export default func;	-----   import func from './file';
// export { a, b };	    -----   import { a, b } from './file';
// export { a as b };	-----   import { b } from './file';

// ******************** Keep Coding Keep Learning ************************

