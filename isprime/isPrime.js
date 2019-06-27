//Check if n is isPrime. Return a boolean.
//A prime number is a number that can only be divided by 1 and itself.
//Examples: [2, 3, 5, 7, 11, 13, 17, 19, 23]

function isPrime(n) {
  for (let i = 2; i < Math.ceil(Math.sqrt(n)); i += 1) { // look up terminology for areas of for loop
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2))// true
console.log(isPrime(3))// true
console.log(isPrime(10)) // false
console.log(isPrime(11)) // true
console.log(isPrime(15)) // false
console.log(isPrime(18)) // false
console.log(isPrime(19)) // true
console.log(isPrime(50)) // false