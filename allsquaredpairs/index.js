// max(num) === 2147483647

// Return every unique pair of numbers [a,b] where (a * a) + (b * b) = num;
// return value will be a two-dimensional array [[]]

function allSquaredPairs(num) {
  let result = [];
  let root = Math.sqrt(num);
  let innerRoot = root;

  for (let i = 0; i <= root; i += 1) {
    for (let k = Math.floor(innerRoot); k >= i; k -= 1) {
      if (k < root && i === 0) break;
      let sum = Math.pow(i, 2) + Math.pow(k, 2)
      if (sum > num) {
        innerRoot -= 1;
        break;
      } else if (sum === num) {
        result.push([i, k]);
        innerRoot -= 1;
        break;
      } else if (sum < num) {
        break;
      }
    }
  }

  return result;
}

const tests = [0,1,2,3,10,16,20,25,325,71825,1048039120,243061325,2027929049,29641625, 2147483643, 2147483645, 2147483647];
tests.forEach(num => {
  console.log(allSquaredPairs(num));
});