const { calculate, parseNumber } = require('../../../src/calculator');

describe('calculator operations (based on calc-basic-operations image)', () => {
  test('2 + 3 => 5 (symbol + and word add)', () => {
    expect(calculate('+', 2, 3)).toBe(5);
    expect(calculate('add', 2, 3)).toBe(5);
  });

  test('10 - 4 => 6 (symbol - and word sub)', () => {
    expect(calculate('-', 10, 4)).toBe(6);
    expect(calculate('sub', 10, 4)).toBe(6);
  });

  test('45 * 2 => 90 (symbol * and word mul)', () => {
    expect(calculate('*', 45, 2)).toBe(90);
    expect(calculate('mul', 45, 2)).toBe(90);
  });

  test('20 / 5 => 4 (symbol / and word div)', () => {
    expect(calculate('/', 20, 5)).toBe(4);
    expect(calculate('div', 20, 5)).toBe(4);
  });

  test('supports unicode symbols × and ÷ and −', () => {
    expect(calculate('×', 6, 7)).toBe(42);
    expect(calculate('÷', 10, 2)).toBe(5);
    expect(calculate('−', 9, 3)).toBe(6);
  });

  test('works with negative and floating numbers', () => {
    expect(calculate('+', -2, 3)).toBe(1);
    expect(calculate('*', 2.5, 4)).toBeCloseTo(10);
  });
});

describe('edge cases and errors', () => {
  test('division by zero throws', () => {
    expect(() => calculate('/', 10, 0)).toThrow('Division by zero');
    expect(() => calculate('÷', 1, 0)).toThrow('Division by zero');
  });

  test('unknown operation throws', () => {
    expect(() => calculate('pow', 2, 3)).toThrow(/Unknown operation/);
  });

  test('invalid number parsing throws', () => {
    expect(() => parseNumber('not-a-number')).toThrow(/Invalid number/);
  });

  test('large numbers and precision sanity', () => {
    expect(calculate('+', 1e12, 1e12)).toBe(2e12);
  });
});
