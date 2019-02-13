// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   let string1 = stringA.split(' ').join('');
//   let string2 = stringB.split(' ').join('');

//   for (i = 0; i < string1.length; i++) {
//     let char = string1[i];
//     if (string2.indexOf(char) === -1) {
//       return false;
//     }
//   }

//   return true;
// }

function anagrams(stringA, stringB) {
  let regex = /\s|\W|/gi;
  let newStringA = stringA.replace(regex, '').split('').sort().join('').toLowerCase();
  let newStringB = stringB.replace(regex, '').split('').sort().join('').toLowerCase();

  return (newStringA == newStringB);
}

console.log(anagrams('rail safety', 'fairy tales')); //--> True
console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); //--> True
console.log(anagrams('Hi there', 'Bye there')); //--> False

//   let counterA = {};
//   let counterB = {};

//   for (let i = 0; i < stringA.length; i += 1) {
//     let char = stringA[i];
//     if (counterA[char]) counterA[char] += 1;
//     else counterA[char] = 0;
//   }


// module.exports = anagrams;

// anagrams('rail safety', 'fairy tales') --> True


// counterA['r']
// counterA = {
//     r: 1,
//     a: 1,
//     k: 1,
//     e: 1
// };

// return (counterA === counterB);

// .replace