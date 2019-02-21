// Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay".

// "hello" => "ellohay"
// "creating" => "eatingcray"

// If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

// "algorithm" => "algorithmway"

// This problem is different from other variations in that it expects casing to remain the same so:

// "Hello World" => "Ellohay Orldway"

// as well as punctuation.

// "Pizza? Yes please!" => "Izzapay? Esyay easeplay!"

// Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.

const capitalizeFirst = word => word[0].toUpperCase() + word.slice(1).toLowerCase();
const splitPunctuation = word => {
  let resultWord = '';
  let punctuation = '';

  for (let i = 0; i < word.length; i += 1) {
    let char = word[i];
    if (char.match(/\w/i)) resultWord += char;
    else punctuation += char;
  }

  return [resultWord, punctuation];
}

const translate = sentence => {
  let vowels = 'aeiouAEIOU';
  let resultArray = [];
  let words = sentence.split(' ');

  for (word of words) {
    let piggedWord = '';
    let splitPuncWordArray = splitPunctuation(word);
    let punclessWord = splitPuncWordArray[0];
    let index = 0;
    for (let i = 1; i < punclessWord.length; i += 1) {
      let char = punclessWord[i];
      if (vowels.includes(word[0])) {
        resultArray.push(word + 'way');
        break;
      }
      if (vowels.match(char)) {
        if (!index) index = i;
        if (!piggedWord) piggedWord = punclessWord.slice(i) + punclessWord.slice(0, i) + 'ay';
      }
    }
    if (word[0] === word[0].toUpperCase()) piggedWord = capitalizeFirst(piggedWord);
    resultArray.push(piggedWord + splitPuncWordArray[1]);
  }

  return resultArray.join(' ');
}

console.log(translate('herro, my name is Ken!!')); // errohay, myay amenay isway Enkay!!
console.log(translate('Pizza? Yes Please!!')); // Izzapay? Esyay Easeplay!!