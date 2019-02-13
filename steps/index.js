// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  if (n > 0) {
    for (let i = 1; i <= n; i += 1) { //j has to run the number of times of i
      let result = ''; // ##
      for (let j = 1; j <= i; j += 1) {
        result += '#';
      }
      for (let k = 1; k <= n - i; k += 1) { //k has to run n - i number of times
        result += ' ';
      }
      console.log(result);
    }
  }
}

console.log(steps(2));
// module.exports = steps;

// if (n > 0) {
//   let holder = '';
//   for (let i = 1; i <= n; i++) {
//     if (holder.length < n) {
//       for (let k = 0; k < n - i; k++) {
//         holder += '#';
//       }
//     }
//     console.log(holder);
//     holder = '';
//   }
// }

// return '';