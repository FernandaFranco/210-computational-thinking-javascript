function repeater(string) {
  var repeatedString = '';
  var i;

  for (i = 0; i < string.length; i++) {
    repeatedString = repeatedString.concat(string[i], string[i]);
  }

  return repeatedString;
}

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

var CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
                  'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function doubleConsonants(string) {
  var repeatedString = '';
  var i;

  for (i = 0; i < string.length; i++) {
    if (CONSONANTS.indexOf(string[i].toLowerCase()) !== -1) {
      repeatedString = repeatedString.concat(string[i]);
    }

    repeatedString = repeatedString.concat(string[i]);
  }

  return repeatedString;
}

// console.log(doubleConsonants('String'));          // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
// console.log(doubleConsonants(''));                // ""

function reverseNumber(number) {
  return parseInt(String(number).split('').reverse().join(''), 10);
}

// console.log(reverseNumber(12345));    // 54321
// console.log(reverseNumber(12213));    // 31221
// console.log(reverseNumber(456));      // 654
// console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
// console.log(reverseNumber(1));        // 1

function centerOf(string) {
  var middleIndex = string.length / 2;

  if (middleIndex > Math.floor(middleIndex)) {
    return string[Math.floor(middleIndex)];
  } else {
    return string [middleIndex - 1] + string[middleIndex];
  }
}

// console.log(centerOf('I Love Ruby'));      // "e"
// console.log(centerOf('Launch School'));    // " "
// console.log(centerOf('Launch'));           // "un"
// console.log(centerOf('Launchschool'));     // "hs"
// console.log(centerOf('x'));                // "x"

function negative(number) {
  return number >= 0 ? - Math.abs(number) : number;
}

// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0
// console.log(negative(-0));    // -0

function sequence(number) {
  var integers = [];
  var i;

  for (i = 0; i < number; i += 1) {
    integers[i] = i + 1;
  }

  return integers;
}

// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]

function swapName(name) {
  // return name.split(' ').reverse().join(', ');
  var names = name.split(' ');
  var lastName = names.pop();
  return [lastName, names.join(' ')].join(', ');
}

// console.log(swapName('Joe John Roberts'));    // "Roberts, Joe"

function sequence(count, start) {
  var i;
  var result = [];

  for (i = 0; i < count; i += 1) {
    result[i] = start * (i + 1);
  }

  return result;
}

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []

function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

function reverseWords(sentence) {
  var words = sentence.split(' ');
  var reversedWords = [];
  var i;
  var word;

  for (i = 0; i < words.length; i += 1) {
    word = words[i];
    if (word.length > 4) {
      word = word.split('').reverse().join('');
    }

    reversedWords.push(word);
  }

  return reversedWords.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
