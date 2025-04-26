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

// ******************** 3rd Topic ************************

// ******************** Keep Coding ************************
