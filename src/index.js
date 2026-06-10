#!/usr/bin/env node
/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *  - addition: add or + (a + b)
 *  - subtraction: sub or - (a - b)
 *  - multiplication: mul or * or x (a * b)
 *  - division: div or / (a / b)
 *
 * Usage examples:
 *  node src/index.js add 2 3
 *  node src/index.js + 2 3
 */

function parseNumber(s) {
  const n = Number(s);
  if (Number.isNaN(n)) {
    console.error(`Invalid number: ${s}`);
    process.exit(2);
  }
  return n;
}

const [, , op, aStr, bStr] = process.argv;

if (!op || aStr === undefined || bStr === undefined) {
  console.error('Usage: node src/index.js <operation> <a> <b>');
  console.error('Operations: add (+), sub (-), mul (*), div (/)');
  process.exit(1);
}

const a = parseNumber(aStr);
const b = parseNumber(bStr);

function calculate(op, a, b) {
  switch (String(op).toLowerCase()) {
    case 'add':
    case '+':
      return a + b;
    case 'sub':
    case 'subtract':
    case '-':
      return a - b;
    case 'mul':
    case 'multiply':
    case '*':
    case 'x':
      return a * b;
    case 'div':
    case 'divide':
    case '/':
      if (b === 0) {
        console.error('Error: Division by zero');
        process.exit(3);
      }
      return a / b;
    default:
      console.error(`Unknown operation: ${op}`);
      process.exit(4);
  }
}

const result = calculate(op, a, b);
console.log(result);
