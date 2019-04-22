
// @param {string} s
// @return {number}

const lengthOfLongestSubstring = s => {
  let string = s;
  let current = '';
  let longest = '';

  for (let i = 0; i < s.length; i += 1) {
    let char = s[i];
    let charIdx = current.indexOf(char)
    if (charIdx === -1) {
      current += char;
      if (current.length > longest.length) longest = current;
    } else {
      string = string.slice(charIdx + 1);
      current = string.slice(0, string.indexOf(char)) + char;
    }
  }
  return longest;
};

console.log(lengthOfLongestSubstring('anvitvjkovdlmvkn')); // 'jkovdlm'
console.log(lengthOfLongestSubstring('anzvitvjkod')); // 'itvjkod'
console.log(lengthOfLongestSubstring('poopoopoo')); // 'po'
console.log(lengthOfLongestSubstring('abcabcbb')); // 'abc'
console.log(lengthOfLongestSubstring('bbbbb')); // 'b'
console.log(lengthOfLongestSubstring('pwwkew')); // 'wke'
console.log(lengthOfLongestSubstring('aab')); // 'ab'
console.log(lengthOfLongestSubstring('dvdf')); // 'vdf'
console.log(lengthOfLongestSubstring('anviaj')); // 'nviaj'