// function findSquares(x,y){
//   let total = x * y;
  
//   for (let i = 1; i < x && i < y; i += 1) {
//     total += (x - i) * (y - i);
//   }

//   return total;
// }

const findSquares = (num1 , num2) => num1 && num2 && num1 * num2 + findSquares(num1 - 1, num2 - 1);

console.log(findSquares(4, 3)); // 20
console.log(findSquares(5, 5)); // 55