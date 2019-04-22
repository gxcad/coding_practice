// let obj = {
//   name: 'Ken',
//   anotherProperty: 'Hello',
//   lastProperty: 'Goodbye'
// }
// let arr = [];
// for (key in obj) {
//   arr.push(key);
// }

// console.log(obj[arr[0]]);

// const checkObj = {
//   oddNum: 1,
//   evenNum: 2,
//   foundNum: 5,
//   randomNum: 18
// };

// let found = 0;
// // ADD CODE HERE
// for (let key in checkObj) {
//   if (key === 'foundNum') found = 1;
// }

// console.log(found);

// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }

// function map(arr, callback) {
//   let result = [];
//   forEach(arr, (num) => result.push(callback(num)));

//   return result;
// }
// // // Uncomment these to check your work!
// console.log(typeof forEach); // should log: 'function'
// forEach(['a', 'b', 'c'], i => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof map); // should log: 'function'
// console.log(map([3, 4, 5], n => n - 2)); // should log: [1, 2, 3]

// ADD CODE HERE
const intersection = arrs => arrs.reduce((acc, arr) => acc.filter(num => arr.includes(num)));

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