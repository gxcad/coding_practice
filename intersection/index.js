// Challenge: intersection

// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs.BONUS - Use reduce!

const intersection = arrs => arrs.reduce((acc, arr) => acc.filter(num => arr.includes(num)));

// Alternate solution:
// let result = [];
// let firstArr = arrs[0];

// for (let i = 0; i < firstArr.length; i++) {
//   if (arrs.every(arr => arr.includes(firstArr[i])) && !result.includes(firstArr[i])) result.push(firstArr[i]);
// }

// return result;

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]