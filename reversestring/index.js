// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = '';

  for (letter of str) {
    reversed = letter + reversed;
  }

  return reversed;
}

console.log(reverse('apple')) // === 'elppa'
console.log(reverse('hello')) // === 'olleh'
console.log(reverse('Greetings!')) // === '!sgniteerG'
module.exports = reverse;
