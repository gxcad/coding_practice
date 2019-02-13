// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples

function maxChar(str) {
  let max = 0;
  let counter = {};
  let solution;
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (counter[char]) {
      counter[char] += 1;
    } else {
      counter[char] = 1;
    }
  }
  for (let key in counter) {
    if (counter[key] > max) {
      max = counter[key];
      solution = key;
    }
  }

  return solution;
}

console.log(maxChar("abcccccccd")) // === "c"
console.log(maxChar("apple 1231111")) // === "1"

// module.exports = maxChar;
