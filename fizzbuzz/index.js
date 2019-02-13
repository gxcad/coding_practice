// --- Directions
// Write a program that returns an array with the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const fizzbuzz = num => {
  let result = [];
  
  for (let i = 1; i <= num; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) result.push('fizzbuzz');
    else if (i % 3 === 0) result.push('fizz');
    else if (i % 5 === 0) result.push('buzz');
    else result.push(i);
  }
  
  return result;
}

console.log(fizzbuzz(20));