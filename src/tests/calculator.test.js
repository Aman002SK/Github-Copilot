const { calculate, parseNumber } = require('../calculator');

describe('calculator operations (basic)', () => {
  test('addition with symbol + and word add', () => {
    expect(calculate('+', 2, 3)).toBe(5);
    expect(calculate('add', 7, 8)).toBe(15);
  });

  test('subtraction with - and word sub', () => {
    expect(calculate('-', 10, 4)).toBe(6);
    expect(calculate('sub', 5, 9)).toBe(-4);
  });

  test('multiplication with * and x', () => {
    expect(calculate('*', 45, 2)).toBe(90);
    expect(calculate('x', 3, 4)).toBe(12);
  });

  test('division with / and word div', () => {
    expect(calculate('/', 20, 5)).toBe(4);
    expect(calculate('div', 9, 3)).toBe(3);
  });
});

describe('edge cases and errors', () => {
  test('division by zero throws', () => {
    expect(() => calculate('/', 10, 0)).toThrow('Division by zero');
  });

  test('unknown operation throws', () => {
    expect(() => calculate('pow', 2, 3)).toThrow(/Unknown operation/);
  });

  test('invalid number parsing throws', () => {
    expect(() => parseNumber('not-a-number')).toThrow(/Invalid number/);
  });
});
