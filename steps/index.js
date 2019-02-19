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

// const steps = n => {
//   for (let i = 1; i <= n; i += 1) {
//     let container = '';
//     for (let k = 1; k <= n; k += 1) {
//       if (k <= i) container += '#';
//       else container += ' ';
//     }
//     console.log(container);
//   }

//   return;
// }

const steps = (n, row = 0, stair = '') => {
  let column = 0;
  if (row === n) return;
  
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  stair.length <= row ? stair += '#' : stair += ' ';
  steps(n, row, stair);
}

console.log(steps(4));

// function steps(n) {
//   if (n > 0) {
//     for (let i = 1; i <= n; i += 1) { //j has to run the number of times of i
//       let result = ''; // ##
//       for (let j = 1; j <= i; j += 1) {
//         result += '#';
//       }
//       for (let k = 1; k <= n - i; k += 1) { //k has to run n - i number of times
//         result += ' ';
//       }
//       console.log(result);
//     }
//   }
// }

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