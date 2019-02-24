// Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

// If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
// The shift will always be in range of [1, 26].

// function CaesarCipher(shift) {
//   let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   this.encode = str => {
//     let result = '';
    
//     for (char of str.toUpperCase()) {
//       if (!alpha.includes(char)) result += char;
//       else {
//         let index = (alpha.indexOf(char) + shift) % 26;
//         result += alpha[index];
//       }
//     }
    
//     return result;
//   }

//   this.decode = str => {
//     let result = '';
    
//     for (char of str) {
//       if (!alpha.includes(char)) result += char;
//       else {
//         let index = (alpha.indexOf(char) + 26 - shift) % 26;
//         result += alpha[index];
//       }
//     }
    
//     return result;
//   }
// }

function CaesarCipher(shift) {
  let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  this.encode = str => str.replace(/[a-z]/gi, char => alpha[(alpha.indexOf(char.toUpperCase()) + shift) % 26]);
    
  this.decode = str => str.replace(/[a-z]/gi, char => alpha[(alpha.indexOf(char) + 26 - shift) % 26]);
}

// For example:

let c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
console.log(c.encode('Codewars')); // returns 'HTIJBFWX'
console.log(c.decode('BFKKQJX')); // returns 'WAFFLES'