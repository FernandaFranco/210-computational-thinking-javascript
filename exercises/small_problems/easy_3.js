function howOldIsTeddy() {
  var age = getRandomAgeBetween(20, 200);

  console.log('Teddy is ' + String(age) + ' years old!');
}

function getRandomAgeBetween(number1, number2) {
  var min = Math.min(number1, number2);
  var max = Math.max(number1, number2);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// howOldIsTeddy();
// howOldIsTeddy();
// howOldIsTeddy();
// howOldIsTeddy();
// howOldIsTeddy();
// howOldIsTeddy();

var numbers = [];
var number;

var included =  function(element) {
  return element === number;
}

// number = prompt('Enter the 1st number:');
numbers.push(number);
// number = prompt('Enter the 2nd number:');
numbers.push(number);
// number = prompt('Enter the 3rd number:');
numbers.push(number);
// number = prompt('Enter the 4th number:');
numbers.push(number);
// number = prompt('Enter the 5th number:');
numbers.push(number);
// number = prompt('Enter the last number:');

sentence = 'The number ' + number + ' does not appear in [' + numbers.join(', ') + '].'

if (numbers.some(included)) {
  sentence = 'The number ' + number + ' appears in [' + numbers.join(', ') + '].'
}

// console.log(sentence);

var retirementYear;
var workingYears;

// var age = parseInt(prompt('What is your age?'), 10);
// var retirementAge = parseInt(prompt('At what age would you like to retire?'), 10);
// var currentYear = new Date().getFullYear();
// workingYears = retirementAge - age;
// retirementYear = currentYear + workingYears;


// console.log("It's " + currentYear + ". You will retire in " + retirementYear + ".");
// console.log("You have only " + workingYears + " years of work to go!");

function isPalindrome(string) {
  var reverseString = string.split('').reverse().join('');
  return reverseString === string;
}

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true

function isRealPalindrome(string) {
  var charsArray = string.toLowerCase().match(/[\w]+/g);
  var strippedString = charsArray.join('');
  console.log(strippedString);
  return isPalindrome(strippedString);
}

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

function runningTotal(numbers) {
  var total = 0;
  // var runningTotals = [];

  // for (var i = 0; i < numbers.length; i += 1) {
  //   total += numbers[i];
  //   runningTotals.push(total);
  // }

  var runningTotals = numbers.map(function(element) {
    total += element;
    return total;
  })

  return runningTotals;
}

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []

function swap(string) {
  var words = string.split(' ');
  // var swappedWords =[];
  // var i;

  // for (i = 0; i < words.length; i+= 1) {
  //   var chars = words[i].split('');
  //   var temp = chars[0];
  //   chars[0] = chars[chars.length - 1];
  //   chars[chars.length - 1] = temp;
  //   swappedWords[i] = chars.join('');
  // }

  swappedWords = words.map( function(word) {
    var chars = word.split('');
    var temp = chars[0];
    chars[0] = chars[chars.length - 1];
    chars[chars.length - 1] = temp;
    return chars.join('');
  });

  return swappedWords.join(' ');
}

// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"

function wordSizes(string) {
  var sizes = {};
  var words = string.split(' ');
  var word;
  var wordSize;

  for (var i = 0; i < words.length; i += 1) {
    if (words[i] === '') continue;
    word = words[i].match(/[a-z]+/gi).join('');
    wordSize = word.length;

    sizes[wordSize] = sizes[wordSize] || 0;
    sizes[wordSize] += 1;
  }

  return sizes;
}

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}
console.log(wordSizes('   reeba'));

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
