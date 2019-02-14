//Write a simple parser that will parse and run Deadfish.

//Deadfish has 4 commands, each 1 character long:

    // i increments the value (initially 0)
    // d decrements the value
    // s squares the value
    // o outputs the value into the return array

// Invalid characters should be ignored.



function parse( data ) {
  const output = [];
  let value = 0;
  
  for (char of data) {
    if (char === 'i') value += 1;
    else if (char === 'd') value -= 1;
    else if (char === 's') value = Math.pow(value, 2);
    else if (char === 'o') output.push(value);
  }
  
  return output;
}

console.log(parse("iiisdoso")) // => [ 8, 64 ]
console.log(parse('iididosozumaiiso')) // => [1, 1, 9]