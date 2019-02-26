// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

//     Your message is a string containing space separated words.
//     You need to encrypt each word in the message using the following rules:
//         The first letter needs to be converted to its ASCII code.
//         The second letter needs to be switched with the last letter
//     Keepin' it simple: There are no special characters in input.

// Examples:

const encryptThis = function(text) {
  let result = [];
  let words = text.split(' ');
  let encoded;

  for (word of words) {
    encoded = '';
    for (let i = 0; i < word.length; i += 1) {
      let char = word[i];
      let lastChar = word[word.length - 1];
      if (i === 0) encoded += char.charCodeAt();
      else if (i === 1) encoded += lastChar;
      else if (i === word.length - 1) encoded += word[1];
      else encoded += char;
    }
    result.push(encoded);
  }

  return result.join(' ');
}

console.log(encryptThis("Hello")); // === "72olle"
console.log(encryptThis("good")); // === "103doo"
console.log(encryptThis("hello world")); // === "104olle 119drlo"
