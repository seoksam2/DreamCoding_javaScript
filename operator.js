// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numberic operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greather than
console.log(10 >= 6); // grether than or equal

// 6. Logical operators: \\ (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

console.log(`value1: ${value1}`);
console.log(`value2: ${value2}`);

// \\ (or)
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😱");
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === stric equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {
  name: "ellie",
};
const ellie2 = {
  name: "ellie",
};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// 8. Conditional operators: if
// if, else if, else
const name = "seoksam2";
if (name === "seoksam2") {
  console.log("welcome, seoksam2!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "seoksam2" ? "yes" : "no");

// 10. Switch statment
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go way!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("some all");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the conditon.
let j = 3;
do {
  console.log(`do while: ${j}`);
  j--;
} while (j > 0);

// for loop, for(begin; condition; step)
// for (i = 3; i > 0; i--) {
//     console.log(`for: ${i}`);
// }

// for (let i = 3; i > 0; i = i - 2) {
//     //inline variable declaration
//     console.log(`inline variable for: ${i}`);
// }

// // nested loops
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }

//break, continue
// Q1. interate from 0 to 10 and print only even numbers (use continue)
for (i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// Q2. interate from 0 to 10 and print numbers untill reaching 8 (use break)
for (i = 0; i < 10; i++) {
  if (i === 8) {
    console.log(`break meet!!`);
    break;
  } else {
    console.log(`where is 8? ${i}`);
  }
}
