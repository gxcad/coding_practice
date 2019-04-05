
// @param {string} s
// @return {number}

var lengthOfLongestSubstring = function (s) {
  let current = '';
  let longest = '';

  for (let char of s) {
    if (!current.includes(char)) {
      current += char;
    }
    else {
      if (current.length > longest.length) longest = current;
      current = char;
    }
    // console.log(current, 'current');
    // console.log(longest, 'longest');
  }
  if (!longest.length) return current;
  return longest;
};

console.log(lengthOfLongestSubstring('poopoopoo'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));