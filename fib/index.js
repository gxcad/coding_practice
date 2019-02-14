// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.

// noted this problem has a questionable interpretation of what is the n-th number, so expected solutions are commented after each log test.
// used my interpretation which is 0 is 1st, 1 is 2nd, 1 is 3rd, 2 is 4th, 3 is 5th, 5 is 6th, 8 is 7th, and so on.

function fib(n) {
  if (n === 1) return 0
  let previous = 0;
  let current = 1;
  
  for (let i = 2; i < n; i += 1) {
    let temp = current;
    current += previous;
    previous = temp;
  }
  
  return current;
}

// Example:
console.log(fib(4)); // === 2
console.log(fib(7)); // === 8
console.log(fib(10)); // === 34