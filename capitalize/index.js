// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples

// function capitalize(str) {
//   let result = '';

//   for (let i = 0; i < str.length; i += 1) {
//     if (i === 0) result += str[i].toUpperCase();
//     else if (str[i - 1] === ' ') result += str[i].toUpperCase();
//     else result += str[i];
//   }

//   return result;
// }

const capitalize = str => {
  let result = [];

  for (word of str.split(' ')) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(' ');
}

console.log(capitalize('a short sentence')); // --> 'A Short Sentence'
console.log(capitalize('a lazy fox')); // --> 'A Lazy Fox'
console.log(capitalize('look, it is working!')); // --> 'Look, It Is Working!'
