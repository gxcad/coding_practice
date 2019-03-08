// We want to generate all the numbers of three digits that:

//     the value of adding their corresponding ones(digits) is equal to 10.

//     their digits are in increasing order (the numbers may have two or more equal contiguous digits)

// The numbers that fulfill the two above constraints are: 118, 127, 136, 145, 226, 235, 244, 334

// Make a function that receives two arguments:

//     the sum of digits value

//     the amount of desired digits for the numbers

// The function should output an array with three values: [1,2,3]

// 1 - the total amount of all these possible numbers

// 2 - the minimum number

// 3 - the maximum numberwith

// The example given above should be:

// findAll(10, 3) ---> [8, "118", "334"]

// If we have only one possible number as a solution, it should output a result like the one below:

// findAll(27, 3) ---> [1, "999", "999"]

// If there are no possible numbers, the function should output the empty array.

// findAll(84, 4) ---> []

// The number of solutions climbs up when the number of digits increases.

// findAll(35, 6) ---> [123, '116999', '566666']

// Features of the random tests:

// Numbers of tests: 111
// Sum of digits value between 20 and 65
// Amount of digits between 2 and 15
function sortStringTest(string) {
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] > string[i + 1]) return false;
  }

  return true;
}

function sum(numString) {
  let total = 0;

  for (let i = 0; i < numString.length; i += 1) {
    total += parseInt(numString[i]);
  }

  return total;
}

function findAll(num1, num2) {
  let current = '1';
  let numArray = [];

  for (let i = 1; i < num2; i += 1) {
    current += '0';
  }
    
  while (current.length < num2 + 1) {
    if (sum(current) === num1 && sortStringTest(current)) {
      numArray.push(current);
    }
    current = parseInt(current);
    current += 1;
    current = current.toString();
    console.log(current, 'this number considered');
  }

  if (numArray.length === 0) return [];
  else return [numArray.length, numArray[0], numArray[numArray.length - 1]];
}

// console.log(sortStringTest('179'));
// console.log(sum('118'));
console.log(findAll(10, 3));

// first number is sum of single digits of number
// e.g. 118 = 10
// second number is number of digits in number

// Output in array with:
// Number of results
// Minimum number match
// Maximum number match

// If only one result, both min and max should be same
// If no results, return empty array