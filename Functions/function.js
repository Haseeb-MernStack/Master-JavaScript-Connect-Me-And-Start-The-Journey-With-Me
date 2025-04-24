// Functions

// ******************** 1$t Topic ************************

//! 1. if, else, else if.

//  if, else, else if.

//! example - 1
// let age = 28;
// if (age >= 18) {
//     console.log("You are an adult.");
// }

//! example - 2
// let age1 = 18;
// let age2 = 17;
// if(age1 >= 18){
//     console.log('You can drive.');
// }else{
//     console.log('Are you kidding.');
// }

//! example - 3

// let marks = 33;

// if (marks >= 90) {
//     console.log('Congratulation! Grade: A');
// } else if (marks >= 75) {
//     console.log('Well! Grade: B');
// } else if (marks >= 60) {
//     console.log('Good! Grade: C');
// } else if (marks >= 33) {
//     console.log('You are pass.');
// } else if (marks < 33) {
//     console.log('Sorry! You are fail.');
// } else {
//     console.log('Invalid marks!');
// }


// ******************** 2nd Topic ************************

//! 2. switch.

//  switch.

//! example - 1;

// let day = 5;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

//! example - 2 - real life example checkout.

// const today = new Date().getDay(); // Returns 0 (Sunday) to 6 (Saturday)

// switch (today) {
//   case 0:
//     console.log("Today is Sunday");
//     break;
//   case 1:
//     console.log("Today is Monday");
//     break;
//   case 2:
//     console.log("Today is Tuesday");
//     break;
//   case 3:
//     console.log("Today is Wednesday");
//     break;
//   case 4:
//     console.log("Today is Thursday");
//     break;
//   case 5:
//     console.log("Today is Friday");
//     break;
//   case 6:
//     console.log("Today is Saturday");
//     break;
//   default:
//     console.log("Invalid day");
// }

//! today date and time and also day you can checkout.
// const date = new Date();
// const day = date.getDay(); // Returns 0 (Sunday) to 6 (Saturday)
// console.log(day);


// ******************** 3rd Topic ************************


//! 3. Loops ( for, while, do-while, for-of, for-in, for-each ).

//  Loops ( for, while, do-while, for-of, for-in, for-each ).

// for

//! example - 1.

// for(i=0;i<50;i++){
//     console.log('Hello Engineers');
// }

//! example - 2

// for (let i = 1; i <= 5; i++) {
//     console.log("Number:", i);
//   }


// while

//! example - 1.

// let i = 1;

// while (i <= 5) {
//   console.log("Number:", i);
//   i++;
// }


//! example - 2

// let i = 1;

// while (i <= 10) {
//     console.log('Hello Engineers');
//     i++;
// }

// do-while

//! example - 1.

// let i = 1;

// do {
//   console.log("Number:", i);
//   i++;
// } while (i <= 10);

//! example - 2.
// let i = 1;
// do{
//     console.log('Hello Engineers', i);
//     i++;
// }while(i<=5);


// for-of

//! example - 1.

// const fruits = ["apple", "banana", "mango", "orange"];

// for (const fruit of fruits) {
//   console.log("Fruit:", fruit);
// }

//! example - 2 - real life example.

// const mern = ["MongoDB", "Express", "React", "Node"];
// for (tech of mern){
//     console.log("Master:", tech);
// }

// for-in

//! example - 1.

// const person = {
//     name: "John",
//     age: 30,
//     job: "developer"
//   };

//   for (const key in person) {
//     console.log(`${key}: ${person[key]}`);
//   }


//! example - 2.

// const stack = {
//     Name: "MernStack",
//     Job: "High Demand",
//     Master: ["MongoDB", "Express", "React", "Node"],
//     Year: 2025,
//     isBest: true,
//     Projects: "You can also build after master these technologies.",
// }

// for (const key in stack) {
//     console.log(`${key}: ${stack[key]}`);
// }


// for-each

//! example - 1.

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => {
//   console.log("Number:", number);
// });

//! example - 2.

// const technologies = ["MongoDB", "Express.js", "React.js", "Node.js"];

// technologies.forEach((item)=>{
//     console.log(`Master: ${item}`);
// })


// ******************** 4th Topic ************************

//! 4. break, continue.

//* break

// const numbers = [1, 3, 5, 7, 9, 12, 15];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 12) {
//     console.log("Found 12, stopping the loop.");
//     break; // Exit the loop when 12 is found
//   }
//   console.log("Number:", numbers[i]);
// }

//* continue

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     continue; // Skip even numbers
//   }
//   console.log("Odd number:", numbers[i]);
// }

// ******************** Keep Coding ************************