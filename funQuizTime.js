// Fun quiz time
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, reminder

// Answer
function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      return a - b;
    case "multiply":
      return a * b;
    case "reminder":
      return a % b;
    default:
      throw Error('unknown type');
  }
}

console.log(calculate("add", 10, 2));
console.log(calculate("subtract", 10, 2));
console.log(calculate("divide", 10, 2));
console.log(calculate("multiply", 10, 2));
console.log(calculate("reminder", 10, 2));
console.log(calculate("what", 10, 2));