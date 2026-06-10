// Calculator library
// Exports arithmetic functions used by the CLI and tests.
// Supported operations: Addition (+), Subtraction (-), Multiplication (× or *), Division (÷ or /)

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
