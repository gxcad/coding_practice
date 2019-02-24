
// max(num) === 2147483647

// Return every unique pair of numbers [a,b] where (a * a) + (b * b) = num;
// return value will be a two-dimensional array [[]]

function allSquaredPairs(num) {
  let result = [];
  let root = Math.sqrt(num);
  let innerRoot = root;

  for (let i = 0; i <= Math.sqrt(num); i += 1) {
    for (let k = i; k <= innerRoot; k += 1) {
      console.log(i, k, 'this pair tested');
      let sum = Math.pow(i, 2) + Math.pow(k, 2)
      if (sum > num) {
        innerRoot -= 1;
        break;
      }
      else if (sum === num) {
        result.push([i, k]);
        innerRoot -= 1;
        break;
      }
    }
  }

  return result;
}

console.log(allSquaredPairs(25));

// const weirdWords = string => {
//   let result = [];
//   let words = string.split(' ');

//   for (word of words) {
//     result.push(word.slice(0, word.length - 1).toLowerCase() + word.slice(word.length - 1).toUpperCase() + '.');
//   }

//   return result.join(' ');
// }

// console.log(weirdWords('This is a test sentence so far the function will not handle punctuation doubling'));