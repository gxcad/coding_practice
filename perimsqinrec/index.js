const fib = (num) => {
  let previous = 1;
  let current = 1;
  let temp;

  for (let i = 2; i < num; i += 1) {
    temp = current;
    current += previous;
    previous = temp;
  }

  return current;
}

function perimeter(num) {
  let sum = 0;

  for (let i = 0; i <= num; i += 1) {
    sum += fib(i + 1) * 4;
  }

  return sum;
}

console.log(perimeter(5)); // 80
console.log(perimeter(6)); // 132
console.log(perimeter(7)); // 216
// console.log(perimeter(8));
// console.log(perimeter(9));
// console.log(perimeter(20)); // 114624

// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(9));
// console.log(fib(10));