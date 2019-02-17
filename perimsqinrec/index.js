// const fib = (num) => {
//   let previous = 1;
//   let current = 1;
//   let temp;

//   for (let i = 2; i < num; i += 1) {
//     temp = current;
//     current += previous;
//     previous = temp;
//   }

//   return current;
// }

// function perimeter(num) {
//   let sum = 0;

//   for (let i = 0; i <= num; i += 1) {
//     sum += fib(i + 1) * 4;
//   }

//   return sum;
// }

// cleaner solution:

const perimeter = num => {
  let arr = [1, 1];

  for (let i = 2; i <= num; i += 1) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }

  return arr.reduce((sum, num) => sum + num, 0) * 4;
}

console.log(perimeter(5)); // 80
console.log(perimeter(6)); // 132
console.log(perimeter(7)); // 216