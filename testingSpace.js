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
// const intersection = arrs => arrs.reduce((acc, arr) => acc.filter(num => arr.includes(num)));

// let result = [];
// let firstArr = arrs[0];

// for (let i = 0; i < firstArr.length; i++) {
//   if (arrs.every(arr => arr.includes(firstArr[i])) && !result.includes(firstArr[i])) result.push(firstArr[i]);
// }

// return result;

// Uncomment these to check your work!
// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

// let countDown = 10;
// // ADD CODE HERE
// for (let i = 10; i > 0; i--)
//   console.log(countDown);
// console.log('test');
// Uncomment the below line to check your work
// console.log(countDown) // -> should print 0;

// ADD CODE HERE
// const majority = (arr, cb) => {
//   let counter = 0;
//   arr.forEach(val => {
//     if (cb(val)) counter++;
//   });
//   if (counter > arr.length / 2) return true;
//   else return false;
// }

// // Uncomment these to check your work!
// const isOdd = function (num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// const groupBy = (arr, cb) => {
//   let result = {};

//   arr.forEach(val => {
//     let key = cb(val);
//     if (result[key]) result[key].push(val);
//     else result[key] = [val];
//   });

//   return result;
// }

// function test(string1, string2) {
//   let args = Array.prototype.slice.call(arguments);

//   console.log(...args.slice(2));
// }

// test('string1', 'string2', 5);

// function sum(...input) {
//   let total = 0;
//   for (let i = 0; i < input.length; i++) {
//     total += input[i];
//   }
//   console.log(total);
// }

// function delay(func, wait, ...more) {
//   let args = Array.prototype.slice.call(arguments);
//   setTimeout(func, wait, ...more);
// }



// delay(sum, 2000, 1, 2, 3);

// function coolFunction(...vals) {
//   function sum(...nums) {
//     let total = 0;

//     for (num of nums) {
//       total += num;
//     }
//     console.log(nums.join(','));
//     return total;
//   }
//   return sum;
// }

// let sum2 = coolFunction();

// console.log(sum2(1, 2, 3));

// function defineFirstArg(func, arg) {
//   function runner(...innerArg) {
//     let savedArg = arg;
//     return func(arg, ...innerArg);
//   }

//   return runner;
// }

// const subtract = function (big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // should log: 15
// let today = new Date(2019, 8);
// console.log(today.toString());

// function dateStamp(func) {
//   function innerFunc(...args) {
//     let result = {};
//     result.date = new Date();
//     result.output = func(...args);
//     return result;
//   }

//   return innerFunc;
// }

// // Uncomment these to check your work!
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }

// function censor() {
//   let storage = {};
//   function inner(string1, string2) {
//     if (string2) {
//       storage[string1] = string2;
//       return;
//     } else {
//       let result = string1;
//       for (let key in storage) {
//         result = result.replace(key, storage[key]);
//       }

//       return result;
//     }
//   }
//   return inner;
// }

// // Uncomment these to check your work!
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'

// let x = 2, y = 5;

// console.log(x, y);

// const recurse = (letter, num) => {
//   if (num <= 0) return '';
//   if (letter.length === num) return letter;
//   const newLetter = letter + letter[0];
//   return recurse(newLetter, num);
// }

// console.log(recurse('g', 4));
// console.log(recurse('j', 6));
// console.log(recurse('o', 7));

// function factorial(num) {
//   if (num === 0) return 1;
//   if (!Array.isArray(num)) num = [num];
//   let last = num[num.length - 1];
//   if (last === 1) return num.reduce((num1, num2) => num1 * num2);
//   let newNum = num.concat(last - 1);
//   return factorial(newNum);
// }

// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1

// function getLength(array, length = 0) {
//   if (!array[0]) return length;
//   length++
//   return getLength(array.slice(1), length);
// }

// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0

// const results = [];

// const fizzbuzz = (n) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) results.push('fizzbuzz');
//     else if (i % 3 === 0) results.push('fizz');
//     else if (i % 5 === 0) results.push('buzz');
//     else results.push(i);
//   }
//   return results;
// };

// fizzbuzz(16);
// console.log(results);
// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]

// const sumNaturals = (n, result = 1) => n === 1 ? result : sumNaturals(n - 1, result + n);

// console.log(sumNaturals(4));

// Challenge 1 
// function mean(array) {
//   let total = 0;
//   for (let num of array) {
//     total += num;
//   }
//   return Math.floor(total / array.length);
// }

// function mode(array) {
//   let totals = {};
//   let amount = 0;
//   let mode = array[0];

//   for (let i = 0; i < array.length; i += 1) {
//     let num = array[i];
//   }
//   for (let num of array) {
//     if (totals[num]) totals[num] += 1;
//     else totals[num] = 1;
//   }

//   for (let key in totals) {
//     if (totals[key] > amount && key > mode) {
//       mode = key;
//       amount = totals[key];
//     }
//   }

//   return mode;
// }

// function modemean(array) {
//   return (mean(array)) == (mode(array));
// }

// console.log(mean([1, 3, 3, 5]));
// console.log(mode([1, 3, 3, 5]));

// console.log(modemean([1, 3, 3, 5]));
// console.time('twosum');
// function twoSum(arr, target) {
//   const tracker = {};

//   for (const num of arr) {
//     if (!tracker[num]) tracker[num] = true;
//     else {
//       if (tracker[target - num]) return true;
//     }
//     // for (let i = 0; i < arr.length; i += 1) {
//     //   for (let k = i + 1; k < arr.length; k += 1) {
//     //     if (arr[i] + arr[k] === target) return true;
//     //   }
//   }

//   return false;
// }

// function twoSumTests() {
//   console.log(twoSum([1, 2, 5, 7], 3), ' -> ', true);
//   console.log(twoSum([1, 2, 5, 7], 5), ' -> ', false);
//   console.log(twoSum([1], 5), ' -> ', false);
//   console.log(twoSum([1, -1, 0, -2, 2, 2, 3, 4, 5, 7], -1), ' -> ', true);
// }

// twoSumTests() // uncomment to test

// console.timeEnd('twosum');
// console.time('timer');
// function repeater(char, n = 5) {
//   if (n === 0) return '';
//   if (n === 1) return char;
//   return repeater(char + char[0], n - 1);
// }

// console.log(repeater('g')); // -> 'ggggg'
// console.log(repeater('j'));// -> 'jjjjj'
// console.timeEnd('timer');

// console.time('timer');

// function commonElements(array1, array2) {
//   const commonArray = [];
//   const tracker = {};

//   for (const element of array1) {
//     if (!tracker[element]) tracker[element] = true;
//   }
//   for (const element of array2) {
//     if (tracker[element] && tracker[element] !== 'used') {
//       commonArray.push(element);
//       tracker[element] = 'used';
//     }
//   }

//   return commonArray;
// }

// function commonElementsTests() {
//   var array1 = [1, 4, 6, 7, 'ferret', 12, 12, 99, 2000, 'dog', 'dog', 99, 1000];
//   var array2 = [15, 9, 9, 'ferret', 9, 26, 12, 12, 'dog'];
//   console.log(commonElements(array1, array2), " -> ", [12, 'ferret', 'dog']);
// }

// commonElementsTests() // uncomment to test

// console.timeEnd('timer');

// var pets = {
//   names: ['Baron', 'Chief', 'Axel'],
//   owner: 'Jason',
//   description: function () {
//     return this.names.map(pet => `${this.owner} knows an awesome dog named ${pet}.`);
//   }
// };

// console.log(pets.description());

// var foo = 'bar';
// function tester() {
//   var foo = 'inside';
//   baz = 'test';
//   var str = 'hohoho';
// }


// console.log(foo, 'foo');
// console.log(tester());
// console.log(baz, 'baz');
// console.log(foo, 'after');


// let start = new Date().getTime();
// for (let i = 0; i < 1000000000; i += 1) {
//   let blah = 1 + 1;
// }
// let end = new Date().getTime();
// console.log(new Date().getTime() - start);

// function headsOrTails(n, finalArray = [['heads'], ['tails']]) {
//   if (n === 0) {
//     return [];
//   }
//   if (n === 1) {
//     return finalArray;
//   }

//   let currentSize = finalArray.length;

//   for (let i = 0; i < currentSize; i += 1) {
//     finalArray.push(finalArray[i]);
//   }
//   for (let i = 0; i < currentSize; i += 1) {
//     finalArray[i].push('heads');
//   }

//   for (let i = currentSize; i < finalArray.length; i += 1) {
//     finalArray[i].push('tails');
//   }

//   return headsOrTails(n - 1, finalArray);
// }

// To check if you've completed the challenge, uncomment this code!
// console.log(headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
// console.log(headsOrTails(3));
// -> [
//   ['heads', 'heads', 'heads'],
//   ['heads', 'heads', 'tails'],
//   ['heads', 'tails', 'heads'],
//   ['heads', 'tails', 'tails'],
//   ['tails', 'heads', 'heads'],
//   ['tails', 'heads', 'tails'],
//   ['tails', 'tails', 'heads'],
//   ['tails', 'tails', 'tails'],
// ]

function sumOfMultidimensionalArrays(array, sum = 0) {
  if (array.length <= 0) {
    return sum;
  }
  let lastValue = array.pop();
  if (Array.isArray(lastValue)) {
    return sumOfMultidimensionalArrays(array, sumOfMultidimensionalArrays(lastValue, sum));
  } else {
    return sumOfMultidimensionalArrays(array, sum + lastValue); // exit 1
  }
}

console.log(sumOfMultidimensionalArrays([1, 9, 10])); // = 20
console.log(sumOfMultidimensionalArrays([1, [2, [3]], [4], [5, 6]])); // = 21
console.log(sumOfMultidimensionalArrays([1, [2, [3]], [4], 5, [6, [7, [8]], 9], [10]])); // = 55