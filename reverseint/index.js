// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples

// turn n into a string
// create a for loop that takes the characters and reverses them but is aware of negative or positive
// return the result of the for loop
// convert number back into a number
function reverseInt(n) {
  let number = n.toString();
  let newNumber = '';

  for (let i = number.length - 1; i >= 0 ; i--) {
    let char = number[i];
    if (char === '-') {
      newNumber = '-' + newNumber;
    } else {
      newNumber = newNumber + char;
    }
  }

  return parseFloat(newNumber);
}
  console.log(reverseInt(15)) // === 51
  console.log(reverseInt(981)) // === 189
  console.log(reverseInt(500)) // === 5
  console.log(reverseInt(-15)) // === -51
  console.log(reverseInt(-90)) // === -9

// module.exports = reverseInt;
