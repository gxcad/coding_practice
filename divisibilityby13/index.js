function thirt(num) {
  let prevSum = 0;
  let currentSum = num;
  let divisions = [1, 10, 9, 12, 3, 4];
  
  while (currentSum !== prevSum) {
    let numString = currentSum.toString();
    prevSum = currentSum;
    currentSum = 0;
    for (let i = 1; i <= numString.length; i += 1) {
      let num1 = numString[numString.length - i];
      let num2 = divisions[(i - 1) % 6];
      currentSum += num1 * num2;
    }
  }

  return currentSum;
}

console.log(thirt(1234567)) // 87
// console.log(thirt(321)); // 48