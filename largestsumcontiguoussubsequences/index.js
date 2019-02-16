// Given an array of numbers, calculate the largest sum of all possible blocks of consecutive elements within the array. The numbers will be a mix of positive and negative values. If all numbers of the sequence are nonnegative, the answer will be the sum of the entire array. If all numbers in the array are negative, your algorithm should return zero. Similarly, an empty array should result in a zero return from your algorithm.

// largestSum([-1,-2,-3]) == 0
// largestSum([]) == 0
// largestSum([1,2,3]) == 6

// Easy, right? This becomes a lot more interesting with a mix of positive and negative numbers:

// largestSum([31,-41,59,26,-53,58,97,-93,-23,84]) == 187

// The largest sum comes from elements in positions 3 through 7: 59+26+(-53)+58+97 == 187

// Once your algorithm works with these, the test-cases will try your submission with increasingly larger random problem sizes.

function largestSum(arr){
  let result = 0, currentResult = 0;

  for (let i = 0; i < arr.length; i += 1) {
     currentResult += arr[i];
     if (currentResult < 0) currentResult = 0;
     if (currentResult > result) result = currentResult;
  }

  return result;
}

console.log(largestSum([-1,-2,-3])) // == 0
console.log(largestSum([])) // == 0
console.log(largestSum([1,2,3])) // == 6
console.log(largestSum([31,-41,59,26,-53,58,97,-93,-23,84])) // == 187
