"use strict";

// Function
// - fundamental building block in the program
// - performs a task or calculates value

// 1. Function decalaration
// function name(param1, param2) { body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello World");

// 2. Parameters
// premitive parameters: passed by vlue;
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const seoksam2 = { name: "seoksam2" };
changeName(seoksam2);
console.log(seoksam2);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  //   if (from === undefined) {
  //     from = "unknown";
  //   }
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "seoksam2");

// 5. Local scope
let globalMessage = "global";
function printMessage() {
  let message = "hello";
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early returnm early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  //long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argment to other functions.
// can be return by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a funcion expression is created when the execution reaches it.
const print = function () {
  //anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("yes");
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log("simplePrint");
// };

const simplePrint = () => console.log("simplePrint");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoke Function Expression
(function hello() {
  console.log("IIFE");
})();
