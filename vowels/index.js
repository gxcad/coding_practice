// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.

function vowels(str) {
  let vowels = 'aeiou';
  let count = 0;
  
  for (letter of str) {
    if (vowels.indexOf(letter) !== -1) count += 1;
  }

  return count;
}

// --- Examples
console.log(vowels('Hi There!')) // --> 3
console.log(vowels('Why do you ask?')) // --> 4
console.log(vowels('Why?')) // --> 0

// module.exports = vowels;
