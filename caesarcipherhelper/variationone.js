function movingShift(string, shift) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var addResult = [];
  var k = 0;
  
  for (var i = 0; i < string.length; i += 1) {
    var char = string[i];
    var index = alphabet.indexOf(char);
    var currentShift = shift + k;
    addResult.push(alphabet[(index + currentShift) % 26]);
    k += 1;
  }
  
  return addResult;
}

function demovingShift(arr, shift) {
  return "";
}

Example:

let u = "I should have known that you would have a perfect answer for me!!!"

console.log(movingShift(u, 1)) // J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]

// (quotes added in order to see the strings and the spaces, your program won't write these quotes, see Example Test Cases)

console.log(demovingShift(v, 1)) // returns u.

console.log(movingShift('I should have known that you would have a perfect answer for me!!!'));