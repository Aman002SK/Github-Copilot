#!/usr/bin/env node
/**
 * Node.js CLI Calculator wrapper
 * Delegates to src/calculator.js for logic so it can be unit-tested.
 */

const { parseNumber, calculate } = require('./calculator');

const [, , op, aStr, bStr] = process.argv;

if (!op || aStr === undefined || bStr === undefined) {
  console.error('Usage: node src/index.js <operation> <a> <b>');
  console.error('Operations: add (+), sub (-), mul (*), div (/). Unicode symbols supported: ×, ÷, −');
  process.exit(1);
}

let a, b;
try {
  a = parseNumber(aStr);
  b = parseNumber(bStr);
} catch (err) {
  console.error(err.message);
  process.exit(2);
}

try {
  const result = calculate(op, a, b);
  console.log(result);
} catch (err) {
  console.error(err.message);
  process.exit(3);
}
