// Functions

// ******************** 1$t Topic ************************

//! create,read,update,delete (CRUD)

// You want to understand CRUD operations (Create, Read, Update, Delete) in JavaScript, using arrays and objects.

//* 1. Using Arrays

// CREATE
// let fruits = ["apple", "banana", "orange"];
// console.log(fruits); // ['apple', 'banana', 'orange']

// READ
// console.log(fruits[1]); // 'banana'

// UPDATE
// fruits[1] = "grape";
// console.log(fruits); // ['apple', 'grape', 'orange']

// DELETE
// fruits.splice(0, 1); // remove first element ('apple')
// console.log(fruits); // ['grape', 'orange']

//* 2. Using Objects

// CREATE
// let user = {
//   name: "John",
//   age: 25,
// };
// console.log(user); // { name: 'John', age: 25 }

// READ
// console.log(user.name); // 'John'

// UPDATE
// user.age = 26;
// console.log(user); // { name: 'John', age: 26 }

// DELETE
// delete user.name;
// console.log(user); // { age: 26 }

// ******************** 2nd Topic ************************

//! array methods:

// push, pop, shift, unshift

//! push

//* Basic push() Example:

// let fruits = ['apple', 'banana'];

// fruits.push('orange'); // Adds 'orange' at the end

// console.log(fruits);
// Output: ['apple', 'banana', 'orange']

//* push() with Multiple Items:

// let numbers = [1, 2];

// numbers.push(3, 4, 5);

// console.log(numbers);
// Output: [1, 2, 3, 4, 5]

//* Important:

// --> push() changes the original array.

// --> It returns the new length of the array.

// let colors = ["red", "green"];

// let newLength = colors.push("blue");

// console.log(colors); // ['red', 'green', 'blue']
// console.log(newLength); // 3

//! pop

//* Basic pop() Example:

// let fruits = ["apple", "banana", "orange"];

// fruits.pop(); // Removes the last item ('orange')

// console.log(fruits);
// Output: ['apple', 'banana']

//*  Important:

// --> pop() removes the last element from the array.

// --> It returns the removed element.

// let animals = ["cat", "dog", "rabbit"];

// let removedAnimal = animals.pop();

// console.log(animals); // ['cat', 'dog']
// console.log(removedAnimal); // 'rabbit'

//! shift

//* Basic shift() Example:

// let fruits = ['apple', 'banana', 'orange'];

// fruits.shift(); // Removes the first item ('apple')

// console.log(fruits);
// Output: ['banana', 'orange']

//* Important:

// --> shift() removes the first element of the array.

// --> It returns the removed element.

// --> It changes the original array.

// let colors = ["red", "green", "blue"];

// let removedColor = colors.shift();

// console.log(colors); // ['green', 'blue']
// console.log(removedColor); // 'red'

//! unshift

//* Basic unshift() Example:

// let fruits = ['banana', 'orange'];

// fruits.unshift('apple'); // Adds 'apple' at the start

// console.log(fruits);
// Output: ['apple', 'banana', 'orange']

//*  Important:

// --> unshift() adds one or more items at the beginning of the array.

// --> It returns the new length of the array.

// --> It modifies the original array.

// let numbers = [2, 3, 4];

// let newLength = numbers.unshift(1);

// console.log(numbers);    // [1, 2, 3, 4]
// console.log(newLength);  // 4

// splice, slice

//! splice

//* What is splice()?

// splice() can be used to:

// ---->  Add items

// ---->  Remove items

//  ----> Replace items
//  ----> (at any position inside an array)

//* Basic Syntax:

// array.splice(startIndex, deleteCount, item1, item2, ...)

// Parameter	                   Meaning

// 1. startIndex	                The position to start
// 2. deleteCount	                How many items to remove
// 3. item1, item2, ...	            Items to add (optional)

//* Examples

//! 1. Remove Items:

// let fruits = ["apple", "banana", "orange", "mango"];

// fruits.splice(1, 2); // start at index 1, remove 2 items ('banana', 'orange')

// console.log(fruits);
// Output: ['apple', 'mango']

//! 2. Add Items:

// let colors = ['red', 'blue'];

// colors.splice(1, 0, 'green'); // start at index 1, remove 0, add 'green'

// console.log(colors);
// Output: ['red', 'green', 'blue']

//! 3. Replace Items:

// let numbers = [1, 2, 3, 4];

// numbers.splice(2, 1, 99); // start at index 2, remove 1 item (3), insert 99

// console.log(numbers);
// Output: [1, 2, 99, 4]

//* Important:

// --> splice() changes the original array.

// --> It returns an array of removed items.

// let fruits = ["apple", "banana", "orange"];

// let removed = fruits.splice(1, 1); // remove 'banana'

// console.log(fruits); // ['apple', 'orange']
// console.log(removed); // ['banana']

//! slice

//* What is slice()?

// slice() is used to copy a part of an array into a new array.

// It does NOT change the original array!

// Parameter	Meaning

// 1. startIndex	Where to start (inclusive)
// 2. endIndex	    Where to stop (exclusive, not included)

//*  Examples

//! 1. Simple Slice

// let fruits = ['apple', 'banana', 'orange', 'mango'];

// let slicedFruits = fruits.slice(1, 3); // from index 1 to 2 (3 is not included)

// console.log(slicedFruits);
// Output: ['banana', 'orange']

// console.log(fruits);
// Output: ['apple', 'banana', 'orange', 'mango'] (original array unchanged)

//! 2. Slice from a Start Index Only

// let colors = ['red', 'green', 'blue', 'yellow'];

// let newColors = colors.slice(2); // from index 2 to end

// console.log(newColors);
// Output: ['blue', 'yellow']

//! 3. Slice with Negative Index

// let numbers = [1, 2, 3, 4, 5];

// let lastTwo = numbers.slice(-2); // last 2 items

// console.log(lastTwo);
// Output: [4, 5]

//*Important Differences: splice() vs slice()

//! Feature	                       splice()	         slice()

// 1. Changes original array?	   Yes	             No
// 2. Removes/adds/replaces?	   Yes	             No (only copies)
// 3. Returns	                   Removed items	 Copied items


//! Quick Example.

// let items = ['pen', 'pencil', 'eraser', 'sharpener'];

// let someItems = items.slice(1, 3); // ['pencil', 'eraser']

// console.log(items);     // ['pen', 'pencil', 'eraser', 'sharpener'] (no change)
// console.log(someItems); // ['pencil', 'eraser']

// map, filter, reduce, find, forEach, includes, indexOf

//! map

//* 1. The Map Object (built-in data structure)
// A Map is like an object ({}), but it allows any type of key (not just strings or symbols), and it maintains the insertion order of its items.

// const myMap = new Map();

// Adding values
// myMap.set('name', 'John');
// myMap.set('age', 30);
// myMap.set(true, 'active');

// Getting values
// console.log(myMap.get('name')); // "John"
// console.log(myMap.get(true));   // "active"

// Checking existence
// console.log(myMap.has('age')); // true

// Iterating
// myMap.forEach((value, key) => {
//   console.log(key, value);
// });

//* 2. The map() Method (on arrays)
// Array.prototype.map() is a method that creates a new array by applying a function to every element of the original array.

// const numbers = [1, 2, 3, 4, 5];

// Double each number
// const doubled = numbers.map(num => num * 2);

// console.log(doubled); // [2, 4, 6, 8, 10]

// 1. map() does not change the original array (it returns a new one).

// 2. It’s super useful for transforming data!


//! filter

// In JavaScript, filter() is an array method used to select certain elements based on a condition.

// It creates a new array with only the elements that pass the given test.

//* basic example
// const numbers = [1, 2, 3, 4, 5, 6];

// Keep only even numbers
// const evens = numbers.filter(num => num % 2 === 0);

// console.log(evens); // [2, 4, 6]

// 1. Here, only numbers divisible by 2 are kept.

// 2. filter() does not change the original array — it returns a new one.

//* Example with an array of objects:

// const users = [
//     { name: 'Alice', isActive: true },
//     { name: 'Bob', isActive: false },
//     { name: 'Charlie', isActive: true }
//   ];

// Get only active users
//   const activeUsers = users.filter(user => user.isActive);

//   console.log(activeUsers);
// [
//   { name: 'Alice', isActive: true },
//   { name: 'Charlie', isActive: true }
// ]

//! reduce

// In JavaScript, reduce() is an array method used to "reduce" an array into a single value — like a number, a string, an object, etc.

// It processes each item in the array and accumulates a result.

//* basic syntax.

// array.reduce((accumulator, currentValue) => {
// logic
// }, initialValue);

// 1. accumulator: holds the running result.

// 2. currentValue: the current element being processed.

// 3. initialValue: the initial value for the accumulator (optional, but usually needed).

//* Simple example: Sum of numbers

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum); // 15

// How it works step-by-step:

// Start with acc = 0

// 0 + 1 → 1

// 1 + 2 → 3

// 3 + 3 → 6

// 6 + 4 → 10

// 10 + 5 → 15 ✅

//* Example: Turn an array into an object

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const fruitCount = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(fruitCount);
// { apple: 3, banana: 2, orange: 1 }

//! find

// In JavaScript, find() is an array method used to find the first element that matches a condition.

// It returns:

// 1. the first matching element, or

// 2. undefined if no match is found.

//* basic example.

// const numbers = [5, 10, 15, 20];

// const firstBigNumber = numbers.find(num => num > 10);

// console.log(firstBigNumber); // 15

// 1. It finds the first number greater than 10 (15).

// 2. It stops searching once it finds a match (more efficient than filter() if you just need one).

//* Example with an array of objects:

// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
//   ];

//   const user = users.find(u => u.id === 2);

//   console.log(user);
// { id: 2, name: 'Bob' }

//*   Important:
// 1. find() returns the item (not an array).

// 2. If no item matches, it returns undefined.

//! forEach

// In JavaScript, forEach() is an array method that allows you to loop through each element in an array and perform an action on it. It does not return a new array like map(), but instead executes the provided function for every item in the array.

//* basic syntax.
// array.forEach((element, index, array) => {
// Do something with the element
// });

// 1. element: the current item being processed.

// 2. index: the index of the current element.

// 3. array: the array being iterated over (optional, but useful in some cases).

//* basic example.
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(num => {
//   console.log(num * 2);
// });
// Output:
// 2
// 4
// 6
// 8
// 10

//* Example with an array of objects:

// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];
  
//   users.forEach(user => {
//     console.log(`${user.name} is ${user.age} years old.`);
//   });
  // Output:
  // Alice is 25 years old.
  // Bob is 30 years old.
  // Charlie is 35 years old.\
  

//*   Key points about forEach():
// 1. Does not return anything. It mutates the array or performs actions (like logging, updating, etc.).

// 2. It cannot be broken out of (unlike a for loop with break).

// If you want to stop the loop early or return something, consider using other methods like map(), filter(), or traditional for loops.

//! includes

// In JavaScript, includes() is an array method used to check if a certain element is present in an array. It returns a boolean (true or false), indicating whether the specified value is found or not.

//* syntax 

// array.includes(element, start);

// 1. element: The item you want to check for in the array.

// 2. start (optional): The position in the array from which to start searching (defaults to 0).

//* basic example.
// const fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.includes('banana')); // true
// console.log(fruits.includes('grape'));  // false

// 1. fruits.includes('banana') returns true because 'banana' is in the array.

// 2. fruits.includes('grape') returns false because 'grape' is not in the array.

//* Example with starting position:
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.includes(3, 2)); // true
// console.log(numbers.includes(2, 3)); // false

// 1. The second parameter (start) indicates from which index the search should begin.

// 2. In the first case, it starts from index 2 (which is 3), so it finds 3 in the array.

// 3. In the second case, it starts from index 3, so it doesn't find 2.

//* Key points:
// includes() is case-sensitive when dealing with strings.

// const words = ['Hello', 'world'];

// console.log(words.includes('hello')); // false (case-sensitive)

//! indexOf

// In JavaScript, indexOf() is an array method that returns the first index at which a given element is found in the array. If the element is not found, it returns -1.

//* syntax

// array.indexOf(element, start);

// 1. element: The item you want to find in the array.

// 2. start (optional): The index at which to start the search (defaults to 0).

//* basic example

// const fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.indexOf('banana')); // 1
// console.log(fruits.indexOf('grape'));  // -1

// 1. fruits.indexOf('banana') returns 1 because 'banana' is at index 1 in the array.

// 2. fruits.indexOf('grape') returns -1 because 'grape' is not in the array.

//* Example with starting position:

// const numbers = [1, 2, 3, 4, 5, 6, 3];

// console.log(numbers.indexOf(3));  // 2 (first occurrence)
// console.log(numbers.indexOf(3, 3)); // 6 (starts searching from index 3)

// The second indexOf(3, 3) starts searching from index 3, so it finds the second occurrence of 3 at index 6.

//* Key differences between indexOf() and includes():

// 1. indexOf() returns the index of the found element (or -1 if not found).

// 2. includes() simply returns true or false based on whether the element is present in the array.


// ******************** 3rd Topic ************************

//! object methods.

//* 1. accessing keys / values.

// In JavaScript, you can access keys and values of an object using various methods. Here are the most common ways to do this:

//! 1. Accessing Object Keys
// To get all keys (properties) of an object, you can use:

// Object.keys()
// It returns an array of the object's own enumerable property names (keys).

// const person = {
//     name: 'Alice',
//     age: 25,
//     job: 'Developer'
//   };
  
//   const keys = Object.keys(person);
//   console.log(keys); // ['name', 'age', 'job']

//   Object.keys(person) will return an array of the object’s keys.


//! 2. Accessing Object Values

// To get all the values associated with the keys, you can use:

// Object.values()
// It returns an array of the object's own enumerable property values.

// const person = {
//     name: 'Alice',
//     age: 25,
//     job: 'Developer'
//   };
  
//   const values = Object.values(person);
//   console.log(values); // ['Alice', 25, 'Developer']

// Object.values(person) will return an array of the values corresponding to each key.

//! 3. Accessing Both Keys and Values
// If you want to access both keys and values, you can use:

// Object.entries()
// It returns an array of key-value pairs in the form of sub-arrays.

// const person = {
//     name: 'Alice',
//     age: 25,
//     job: 'Developer'
//   };
  
//   const entries = Object.entries(person);
//   console.log(entries); 
  // [['name', 'Alice'], ['age', 25], ['job', 'Developer']]

//   Object.entries(person) returns an array of arrays, where each sub-array has a key as the first element and the corresponding value as the second.
  
//! 4. Accessing a Single Value (Direct Access)
// To access a single value directly, you can use either dot notation or bracket notation:

// Dot Notation

// const person = { name: 'Alice', age: 25 };
// console.log(person.name); // 'Alice'

// Bracket Notation
// const person = { name: 'Alice', age: 25 };
// console.log(person['age']); // 25

// Bracket notation is especially useful when the key is stored in a variable or contains spaces/special characters.

//* 5. Iterating Over Keys, Values, or Entries
// You can also iterate over keys, values, or entries using methods like forEach() or for...in:

// for...in loop (Iterate over keys)

// const person = { name: 'Alice', age: 25 };

// for (let key in person) {
//   console.log(key, person[key]);
// }
// Output:
// name Alice
// age 25

//* forEach() with Object.keys() (Iterate over keys)

// const person = { name: 'Alice', age: 25 };

// Object.keys(person).forEach(key => {
//   console.log(key, person[key]);
// });
// Output:
// name Alice
// age 25
  
//* 2. object.keys, object.values, object.entries.

//! object.keys
// What is Object.keys()?

// Object.keys(obj) is a built-in JavaScript method.

// It returns an array of the keys (property names) from the given object.

// Only own properties (not inherited ones) and enumerable properties are included.

//! syntax
// Object.keys(object);
// object: The object whose keys you want to get.

//! example 
// const user = {
//     name: 'Alice',
//     age: 25,
//     country: 'USA'
//   };
  
//   const keys = Object.keys(user);
  
//   console.log(keys); 
  // Output: ['name', 'age', 'country']
  
//*   Real-world usage: Looping through keys
//   You can iterate over the array of keys like this:

// const user = {
//     name: 'Alice',
//     age: 25,
//     country: 'USA'
//   };
  
//   Object.keys(user).forEach(key => {
//     console.log(key, user[key]);
//   });
  // Output:
  // name Alice
  // age 25
  // country USA

//!   Here, you are getting both keys and their values.

//* Special Notes:
// 1. The order of keys will be the same as the order they were defined in the object (for most cases).

// 2. Object.keys({}) on an empty object returns an empty array [].


//! object.values

//* What is Object.values()?
// 1. Object.values(obj) is a built-in JavaScript method.

// 2. It returns an array containing the values of an object's own enumerable properties.

//* syntax.

// Object.values(object);

// object: The object you want to extract values from.

//! example:
// const user = {
//   name: 'Alice',
//   age: 25,
//   country: 'USA'
// };

// const values = Object.values(user);

// console.log(values); 
// Output: ['Alice', 25, 'USA']
// You get an array of just the values (no keys).

//* Real-world usage: Looping through values

// const user = {
//   name: 'Alice',
//   age: 25,
//   country: 'USA'
// };

// Object.values(user).forEach(value => {
//   console.log(value);
// });
// Output:
// Alice
// 25
// USA

//* Special Notes:
// 1. It ignores inherited properties — only own properties are included.

// 2. The order of the values matches the order of their corresponding keys in Object.keys().

// 3. Object.values({}) on an empty object returns an empty array [].

//! object.entries

//* What is Object.entries()?
// 1. Object.entries(obj) is a built-in JavaScript method.

// 2. It returns an array of arrays — each sub-array contains a key and its value from the object.

//! basically
// [
//   [key1, value1],
//   [key2, value2],
//   ...
// ]

//! syntax
// Object.entries(object);

// object: The object you want to get key-value pairs from.

//! example
// const user = {
//   name: 'Alice',
//   age: 25,
//   country: 'USA'
// };

// const entries = Object.entries(user);

// console.log(entries);
// Output:
// [
//   ['name', 'Alice'],
//   ['age', 25],
//   ['country', 'USA']
// ]
// You get an array where each element is a small [key, value] pair.


//* Real-world usage: Looping through entries

// const user = {
//   name: 'Alice',
//   age: 25,
//   country: 'USA'
// };

// Object.entries(user).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });
// Output:
// name: Alice
// age: 25
// country: USA
// Notice the use of destructuring ([key, value]) inside the loop — super clean! 

//* Special Notes:
// 1. Only own and enumerable properties are included.

// 2. Object.entries({}) for an empty object returns an empty array [].

// 3. Very useful when converting objects to maps or manipulating data easily.

//* 3. destructuring.

//! What is Destructuring?
// 1. Destructuring means unpacking values from arrays or objects into separate variables easily.

// 2. Instead of accessing values one by one, destructuring gives you a clean shortcut. 

// Array Destructuring
// When you have an array and want to pull out its elements:

// const numbers = [10, 20, 30];

// Destructure:
// const [first, second, third] = numbers;

// console.log(first);  // 10
// console.log(second); // 20
// console.log(third);  // 30
// first gets 10, second gets 20, third gets 30

//! Object Destructuring
// When you have an object and want to pull out its properties:

// const user = {
//   name: 'Alice',
//   age: 25,
//   country: 'USA'
// };

// Destructure:
// const { name, age, country } = user;

// console.log(name);    // Alice
// console.log(age);     // 25
// console.log(country); // USA
// Variables name, age, and country are created directly.

//! Rename Variables During Destructuring
// Sometimes you want different variable names:

// const user = {
//   name: 'Alice',
//   age: 25
// };

// const { name: userName, age: userAge } = user;

// console.log(userName); // Alice
// console.log(userAge);  // 25

// 1. name from the object is assigned to a new variable userName.

// 2. age is assigned to userAge.

//! Destructuring in Function Parameters
// You can destructure directly inside a function argument:
// function greet({ name, country }) {
//   console.log(`Hello ${name} from ${country}!`);
// }

// const user = { name: 'Alice', country: 'USA' };

// greet(user); // Hello Alice from USA!

//! Real-life example (with Object.entries() + Destructuring)
// const user = {
//   name: 'Alice',
//   age: 25
// };

// Object.entries(user).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

// Output:
// name: Alice
// age: 25

// Here, [key, value] destructures each small array ['name', 'Alice'], ['age', 25] inside the loop.


// ******************** Keep Coding ************************
