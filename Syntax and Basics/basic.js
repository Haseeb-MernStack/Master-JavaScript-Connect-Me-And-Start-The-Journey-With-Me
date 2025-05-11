// Syntax and Basics

// ******************** 1$t Topic ************************

//! 1. Variables.

//  var, let, const.

// var - function scoped, can be redeclared and updated.
// var a = 10;

// function abcd() {
//     var a = 20;
//     console.log(a);
//     console.log(typeof (a));
// }

// abcd();

// let - block scoped, cannot be redeclared but can be updated.

// let a = 10;

// function abcd() {
//     let a = 20;
// a = 30; update the value of a but not re assign because let variable not var.
//     console.log(a);
//     console.log(typeof (a));
// }

// abcd();

// const - block scoped, cannot be redeclared and cannot be updated.

// const a = 10;

// function abcd() {
//     const a = 12;
// a = 10; can't update or re-assign the value of a because const variable used.
//     console.log(a);
//     console.log(typeof (a));
// }

// abcd();

// ******************** 2nd Topic ************************

//! 2. Data Types.

//  string, number, boolean, null, undefined, symbol, bigint.

//! 1- string - used to represent text data. It is a sequence of characters enclosed in single or double quotes.

// let str = "Hello, World!";
// console.log(str);

//! 2- number - used to represent numeric data. It can be an integer or a floating-point number.

// let num = 42;
// console.log(num);

//! 3- boolean - used to represent a logical entity and can have two values: true or false.

// let isTrue = true;
// console.log(isTrue);

//! example for boolean.
// const age = 18;

// const res = age >= 18 ? true : false;
// console.log(res);

//! 4- null - represents the intentional absence of any object value. It is a primitive value that represents "nothing".

// let emptyValue = null;
// console.log(emptyValue);

//! example for null.
// const age = 18;
// const res = age >= 18 ? null : "Not allowed";

// console.log(res);

//! 5- undefined - indicates that a variable has been declared but has not yet been assigned a value. It is a primitive value that represents "no value".
// let unassignedValue;
// console.log(unassignedValue);

//! example for undefined.
// const favNum = 18;
// const res = favNum >= 18 ? undefined : "Not allowed";
// console.log(res);

//! 6- symbol - a unique and immutable primitive value that can be used as the key of an object property. It is often used to create private object properties.

// let sym = Symbol("description");
// console.log(sym);

//! example for symbol.
// const uniqueId = Symbol("id");
// const obj = {
//     [uniqueId]: "12345",
// };
// console.log(obj[uniqueId]); // Output: 12345

//! 7- bigint - a numeric data type that can represent integers with arbitrary precision. It is used to work with large integers that cannot be represented by the regular number type.

// let bigIntValue = BigInt(123456789012345678901234567890);
// console.log(bigIntValue);
// console.log(typeof bigIntValue); // Output: bigint

//! example for bigint.

// const largeNumber = BigInt(123456789012345678901234567890);
// const anotherLargeNumber = BigInt("123456789012345678901234567890");
// const sum = largeNumber + anotherLargeNumber;
// console.log(sum); // Output: 246913578024691356778954164946n

// ******************** 3rd Topic ************************

//! 3. Operators.

//  Arithmetic, Assignment, Comparison, Logical, Bitwise, Ternary.

//* 1. Arithmetic Operators - used to perform basic mathematical operations like addition, subtraction, multiplication, and division.

// let a = 10;
// let b = 5;

// console.log(a + b); //! Addition

// console.log(a - b); //! Subtraction

// console.log(a * b); //! Multiplication

// console.log(a / b); //! Division

// console.log(a % b); //! Modulus (Remainder)

// console.log(a ** b); //! Exponentiation (Power)

//! You can use it in two ways.

//! 1. Using the Exponentiation Operator (**)

// const result = 2 ** 3; // 2 raised to the power of 3
// console.log(result); // Output: 8

//! 2. Using the Math.pow() Function

// const result = Math.pow(2, 3); // 2 raised to the power of 3
// console.log(result); // Output: 8

// const result = Math.pow(a, b); // 10 raised to the power of 5
// console.log(result);

// console.log(a++); //! Postfix Increment

// let a = 10;
// let b = a++;

// console.log(a); // 11 (a was increased)
// console.log(b); // 10 (b got the original value before a increased)

// console.log(a--); //! Postfix Decrement

// let a = 10;
// let b = a--;
// console.log(a); // 9 (a was decreased)
// console.log(b); // 10 (b got the original value before a decreased)

// console.log(++a); //! Prefix Increment

// let a = 10;
// let b = ++a;

// console.log(a); // 11 (a increased)
// console.log(b); // 11 (b got the new value)

// console.log(--a); //! Prefix Decrement

// let a = 10;
// let b = --a;

// console.log(a); // 9 (a decreased)
// console.log(b); // 9 (b got the new value)

// console.log(a); //! Final value of a after all operations.

//* 2- Assignment Operators - used to assign values to variables. The most common assignment operator is the equal sign (=).

// let a = 10; //! Assigning value 10 to variable a

// a += 5; //! Equivalent to a = a + 5 (a becomes 15)

// a -= 3; //! Equivalent to a = a - 3 (a becomes 12)

// a *= 2; //! Equivalent to a = a * 2 (a becomes 24)

// a /= 4; //! Equivalent to a = a / 4 (a becomes 6)

// a %= 3; //! Equivalent to a = a % 3 (a becomes 0)

// a **= 2; //! Equivalent to a = a ** 2 (a becomes 0)

// a &= 1; //! Equivalent to a = a & 1 (a becomes 0)

// a |= 1; //! Equivalent to a = a | 1 (a becomes 1)

// a ^= 1; //! Equivalent to a = a ^ 1 (a becomes 0)

// a <<= 1; //! Equivalent to a = a << 1 (a becomes 0)

//* 3- Comparison Operators - used to compare two values and return a boolean result (true or false).

// let a = 10;
// let b = 5;

// console.log(a == b); //! Equal to (loose equality)

// console.log(a === b); //! Equal to (strict equality)

// console.log(a != b); //! Not equal to (loose inequality)

// console.log(a !== b); //! Not equal to (strict inequality)

// console.log(a > b); //! Greater than

// console.log(a < b); //! Less than

// console.log(a >= b); //! Greater than or equal to

// console.log(a <= b); //! Less than or equal to

//* 4- Logical Operators - used to perform logical operations on boolean values.

// let a = true;
// let b = false;

// console.log(a && b); //! Logical AND (true if both are true)

// console.log(a || b); //! Logical OR (true if at least one is true)

// console.log(!a); //! Logical NOT (true if a is false)

// console.log(!b); //! Logical NOT (true if b is false)

// console.log(a && b || !a); //! Logical AND and OR combined

//* 5- Bitwise Operators - used to perform operations on binary representations of numbers.

// let a = 5; // Binary: 0101
// let b = 3; // Binary: 0011

// console.log(a & b); //! Bitwise AND (Output: 1, Binary: 0001)

// console.log(a | b); //! Bitwise OR (Output: 7, Binary: 0111)

// console.log(a ^ b); //! Bitwise XOR (Output: 6, Binary: 0110)

// console.log(~a); //! Bitwise NOT (Output: -6, Binary: 1010)

// console.log(a << 1); //! Left Shift (Output: 10, Binary: 1010)

// console.log(a >> 1); //! Right Shift (Output: 2, Binary: 0010)

// console.log(a >>> 1); //! Unsigned Right Shift (Output: 2, Binary: 0010)

// console.log(a >>> 1); //! Unsigned Right Shift (Output: 2, Binary: 0010)

// console.log(a << 1); //! Left Shift (Output: 10, Binary: 1010)

// console.log(a >> 1); //! Right Shift (Output: 2, Binary: 0010)

// console.log(a >>> 1); //! Unsigned Right Shift (Output: 2, Binary: 0010)

// console.log(a & b); //! Bitwise AND (Output: 1, Binary: 0001)

//* 6- Ternary Operator - a shorthand way to write an if-else statement. It takes three operands: a condition, a value if the condition is true, and a value if the condition is false.

// (Very Useful) -> //! The syntax is: condition ? valueIfTrue : valueIfFalse.

//* 1st example for Ternary Operator.

// let age = 18;
// let result = age >= 18 ? "Adult" : "Minor"; //! If age is greater than or equal to 18, result is "Adult", otherwise it's "Minor".
// console.log(result); //* Output: "Adult"

// ******************** Keep Coding ************************
