/**
 * Calculator module
 *
 * Supported operations (based on image):
 *  - addition: add or + (a + b)
 *  - subtraction: sub or - or − (a - b)
 *  - multiplication: mul or * or x or × (a * b)
 *  - division: div or / or ÷ (a / b)
 */

function parseNumber(s) {
  const n = Number(s);
  if (Number.isNaN(n)) {
    throw new Error(`Invalid number: ${s}`);
  }
  return n;
}

function calculate(op, a, b) {
  switch (String(op).toLowerCase()) {
    case 'add':
    case '+':
      return a + b;
    case 'sub':
    case 'subtract':
    case '-':
    case '−':
      return a - b;
    case 'mul':
    case 'multiply':
    case '*':
    case 'x':
    case '×':
      return a * b;
    case 'div':
    case 'divide':
    case '/':
    case '÷':
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    default:
      throw new Error(`Unknown operation: ${op}`);
  }
}

module.exports = { parseNumber, calculate };
