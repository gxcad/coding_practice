function findSquares(x,y){
  let total = 0;
  
  total += x * y;
  
  for (let i = 2; i < Infinity; i += 1) {
    if (i <= x && i <= y) {
      let subtractor = i - 1;
      total += (x - subtractor) * (y - subtractor);
    } else return total;
  }
}

console.log(findSquares(4, 3)); // 20
console.log(findSquares(5, 5)); // 55