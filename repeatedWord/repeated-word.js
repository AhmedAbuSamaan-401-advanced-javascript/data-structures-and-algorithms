'use strict';
function repeatedWord(str) {
  str = str.replace(/[^0-9 a-z A-Z ]/g, '');
  let words = {},
    word = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      word += str[i].toLowerCase();
    } else {
      if (words[word]) return word;
      words[word] = true;
      word = '';
    }
  }
  return null;
}

function repeatedWordCount(str) {
  str = str.replace(/[^0-9 a-z A-Z ]/g, '');
  let words = {},
    word = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      word += str[i].toLowerCase();
    } else {
      if (words[word]) {
        words[word] = words[word] + 1;
        word = '';
      } else {
        words[word] = 1;
        word = '';
      }
    }
  }
  return words;
}

module.exports = repeatedWord;