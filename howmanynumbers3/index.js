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
// console.log(increaseDigits('127', 10));

//pseudo code
//if the sum is equal e.g. '118, 10'
//first add 1 to [1] and sub 1 from [2] if [2] is at least 2 greater and [1] is less than 9
//118 -> 127 -> 136 -> 145
//if [1] is 9 or diff is no longer greater than 2, go to next lower index [0] again and add one
//then if [2] is greater than [1], subtract 1 from [2]
// -> 244
//again add 1 to [0] and subtract 1 from [1] if diff between [0] and [1] is at least 2

function increaseDigits(digitString, targetSum) {
  let numbers = '0123456789';
  let digitArray = digitString.split('');
  let currentSum = sum(digitString);
  let difference = targetSum - currentSum; //'118 -> '127' -> '136' -> '145' -> '226' -> '235' -> 244' -> '334'
  let last = digitArray.length - 1;
  while (last > 0) {
    if (!difference) {
      if (digitArray[last] >= digitArray[last - 1] + 2 && digitArray[last - 1] < 9) {
        digitArray[last] -= 1;
        digitArray[last - 1] = numbers[numbers.indexOf(digitArray[last - 1]) + 1];
        last -= 1;
      }
    }
    if (difference < 10 - digitArray[last]) {
      digitArray[last] = numbers[numbers.indexOf(digitArray[last]) + difference];
    }
  }
  
  return digitArray.join(''); //returns a string
}

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

function findFirstNumber(targetSum, numLength) {
  let numberArray = [];
  let remainder = targetSum;

  for (let i = 0; i < numLength; i += 1) {
    numberArray.push(1);
    remainder -= 1;
  }

  let idx = numLength - 1

  while (remainder > 0) {
    let currentDifference = 9 - numberArray[idx];
    if (remainder >= currentDifference) {
      numberArray[idx] += currentDifference;
      remainder -= currentDifference;
    } else {
      numberArray[idx] += remainder;
      remainder = 0;
    }
    idx -= 1;
  }
  return numberArray.join('');
}

function findAll(targetSum, numLength) {
  let current = findFirstNumber(targetSum, numLength);
  let finalArray = [0];
    //here, current === 'number'
    current = current.toString();
    let numberFound = false;
  while (current.length < numLength + 1) {
    let sumOfCurrent = sum(current);
    if (sumOfCurrent === targetSum && sortStringTest(current)) {
      finalArray[0] += 1;
      numberFound = true;
      if (!finalArray[1]) finalArray[1] = current;
      else finalArray[2] = current;
    }
    if (numberFound) current = parseInt(current) + 9;
    else {
      current = parseInt(current) + 1;
    }
    //needs efficient iteration
    console.log(current, 'this number considered');
    current = current.toString();
  }

  if (!finalArray[0]) return [];
  if (!finalArray[2]) finalArray[2] = finalArray[1];
  return finalArray;
}

console.log(findFirstNumber(10, 3));
// console.log(!sortStringTest('101'));
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