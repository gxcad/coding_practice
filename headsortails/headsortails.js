function headsOrTails(n, finalArray = [['heads'], ['tails']]) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return finalArray;
  }

  const currentArrayLength = finalArray.length;

  for (let i = 0; i < currentArrayLength; i += 1) {
    finalArray.push([...finalArray[i]]);
  }

  for (let i = 0; i < currentArrayLength; i += 1) {
    finalArray[i].push('heads');
  }

  for (let i = currentArrayLength; i < finalArray.length; i += 1) {
    finalArray[i].push('tails');
  }
  return headsOrTails(n - 1, finalArray);
}

// To check if you've completed the challenge, uncomment this code!
// console.log(headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
console.log(headsOrTails(3));
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


// Challenge Eight

// Heads or Tails

// Modify the function so that it returns all possible outcomes of n games of heads or tails as an array of arrays
