// Implement the Polybius square cipher.

// Replace every letter with a two digit number. The first digit is the row number, and the second digit is the column number of following square. Letters 'I' and 'J' are both 24 in this cipher:
// 	1	2	3	4	5
// 1	A	B	C	D	E
// 2	F	G	H	I/J	K
// 3	L	M	N	O	P
// 4	Q	R	S	T	U
// 5	V	W	X	Y	Z

// Input will be valid (only spaces and uppercase letters from A to Z), so no need to validate them.
// Examples

function polybius (text) {
  let result = '';
  let alpha = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';

  for (char of text) {
    if (alpha.includes(char) || char === 'J') {
      let index = alpha.indexOf(char);
      if (char === 'J') index = alpha.indexOf('I');
      result += Math.floor(index / 5) + 1;
      result += index % 5 + 1;
    } else result += char;
  }

  return result;
}

console.log(polybius('A'))  // "11"
console.log(polybius('IJ')) // "2424"
console.log(polybius('CODEWARS')) // "1334141552114243"
console.log(polybius('POLYBIUS SQUARE CIPHER')) // "3534315412244543 434145114215 132435231542"