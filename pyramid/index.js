// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides

function pyramid(n) {
  for (let row = 1; row <= n; row++) {
    let string = '';
    for (let column = 1; column <= n * 2 - 1; column++) {
      if (column <= n - row || column > n + (row - 1)) string += ' ';
      else string += '#';
    }
    console.log(string);
  }

  return;
}

// string.length === (n * 2 - 1)

// --- Examples
// console.log(pyramid(1));
//       '#' .length === 1 (n === 1)

// console.log(pyramid(2));
//       ' # '
//       '###' length === 3 (n === 2)

console.log(pyramid(3));
//       '  #  '
//       ' ### '
//       '#####' length === 5 (n === 3)

// module.exports = pyramid;