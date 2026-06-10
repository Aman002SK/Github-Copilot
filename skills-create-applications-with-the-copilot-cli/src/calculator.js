#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations (as shown in provided image):
//  - Addition (+)
//  - Subtraction (-)
//  - Multiplication (× or *)
//  - Division (÷ or /)

function printUsage() {
  console.log('Usage: node src/calculator.js <operator> <number1> <number2>');
  console.log('Operators: +  -  *  /  ×  ÷  (also: add, sub, mul, div)');
  process.exit(1);
}

const [, , opRaw, aRaw, bRaw] = process.argv;
if (!opRaw || !aRaw || !bRaw) printUsage();

const a = Number(aRaw);
const b = Number(bRaw);
if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: number1 and number2 must be valid numbers.');
  process.exit(2);
}

const op = opRaw.trim().toLowerCase();

function divide(x, y) {
  if (y === 0) {
    console.error('Error: Division by zero is not allowed.');
    process.exit(3);
  }
  return x / y;
}

let result;
switch (op) {
  case '+':
  case 'add':
    result = a + b;
    break;
  case '-':
  case 'sub':
    result = a - b;
    break;
  case '*':
  case 'x':
  case '×':
  case 'mul':
    result = a * b;
    break;
  case '/':
  case '÷':
  case 'div':
    result = divide(a, b);
    break;
  default:
    console.error(`Unsupported operator: ${opRaw}`);
    printUsage();
}

// Print the result
console.log(result);
