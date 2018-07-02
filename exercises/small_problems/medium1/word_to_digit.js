/*
input: string containing numbers as words as well as other chars
output: string containing word numbers as actual numbers
requirements: convert words to numbers. words that are not numbers stay the same
mental model: for each word in string, check if is number. if true, replace it.
how to check if number: if word is present in array containing numbers as words, it is a number word.

test cases:
wordToDigit('one too three for you') // returns '1 too 3 for you'
wordToDigit('one two three four you') // returns '1 2 3 4 you'
wordToDigit('onetwo three four you') // returns 'onetwo 3 4 you'
wordToDigit('one. two three four you') // returns '1. 2 3 4 you'
wordToDigit('one. Two THREE four you') // returns '1. 2 3 4 you'
wordToDigit('Please call me at five five five one two three four. Thanks.')

dt structure:
array containing words from 'zero' to 'nine', at corresponding index
array of words in original string
result in string

algorithm:
create number words array
replace in text non word chars with empty string
split text in array of words
map array: for each word,
- lowercase it
- if index of word in numberWords is -1, return word
- else,  return index
end map
return mapped array
*/

function wordToDigit(text) {
  var numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
                     'seven', 'eight', 'nine'];
  var cleanWord;


  return text.split(' ').map(function (word) {
    cleanWord = word.replace(/[^a-z]/ig, '').toLowerCase();
    if (numberWords.indexOf(cleanWord) === -1) {
      return word;
    } else {
      return word.replace(/[a-z]+/i, numberWords.indexOf(cleanWord));
    }
  }).join(' ');
}

function wordToDigit(text) {
  var pattern = /(zero|one|two|three|four|five|six|seven|eight|nine)/ig;
  var numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
                     'seven', 'eight', 'nine'];
  return text.replace(pattern, function (numberWord) {
    return numberWords.indexOf(numberWord.toLowerCase());
  });
}

console.log(wordToDigit('one too three for you')); // returns '1 too 3 for you'
console.log(wordToDigit('one two three four you')); // returns '1 2 3 4 you'
console.log(wordToDigit('onetwo three four you')); // returns 'onetwo 3 4 you'
console.log(wordToDigit('one. two three four you')); // returns '1. 2 3 4 you'
console.log(wordToDigit('one. Two THREE four you')); // returns '1. 2 3 4 you'
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
