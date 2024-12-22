# Unhandled Non-numeric Input in JavaScript Function

This repository demonstrates a common, yet subtle, error in JavaScript:  failing to handle non-numeric inputs in an addition function.  The `foo` function correctly handles `null` values, but crashes if given strings or other non-numeric types.

The `bug.js` file contains the flawed code. The `bugSolution.js` demonstrates how to fix it using type checking and appropriate error handling.

## How to reproduce the bug

1. Clone this repository.
2. Open `bug.js` in a JavaScript environment (e.g., Node.js, browser console).
3. Call the function with non-numeric arguments:  `foo(10, "hello")`, `foo(null, 5)`, `foo(5, undefined)`

Observe the error messages or unexpected behavior. The solution file provides improved handling for such cases.