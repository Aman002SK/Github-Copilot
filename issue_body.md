## Summary

Add a Node.js CLI calculator implemented in `calculator.js` that supports:
- Addition
- Subtraction
- Multiplication
- Division

## Motivation

Basic arithmetic CLI tool for quick calculations or scripting.

## Proposed solution

Implement `calculator.js` as a Node.js CLI exposing commands or flags, for example:
```
node calculator.js add 1 2    # 3
node calculator.js sub 5 3    # 2
node calculator.js mul 4 6    # 24
node calculator.js div 10 2   # 5
```
The CLI should validate numeric input and handle divide-by-zero gracefully.

## Acceptance criteria

- `calculator.js` implements `add`, `sub`, `mul`, and `div` operations
- Accepts numeric command-line arguments
- Provides helpful `--help`/usage text
- Handles divide-by-zero with a clear error message and non-zero exit code

