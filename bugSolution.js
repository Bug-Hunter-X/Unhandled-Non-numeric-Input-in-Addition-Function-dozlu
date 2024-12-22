function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-numeric input
  }

  return a + b;
}
//Alternative solution to return an error string
// function foo(a, b) {
//   if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
//     return "Error: Inputs must be numbers.";
//   }
//   return a + b;
// }