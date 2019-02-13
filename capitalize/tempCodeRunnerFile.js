italize = str => {
  let result = [];

  for (word of words.split(' ')) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(' ');
}