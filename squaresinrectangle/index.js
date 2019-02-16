function findSquares(x,y){
  let total = x * y;
  
  for (let i = 2; i <= x && i <= y; i += 1) {
    total += (x - (i - 1)) * (y - (i - 1));
  }

  return total;
}

console.log(findSquares(4, 3)); // 20
console.log(findSquares(5, 5)); // 55