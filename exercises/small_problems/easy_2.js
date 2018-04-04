// function crunch(string) {
//   var i;
//   var newString = '';

//   for (i = 0; i < string.length; i++) {
//     if (string[i] !== string[i-1]) {
//       newString += string[i];
//     }
//   }

//   return newString;
// }
// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""


// function logInBox(string, maxWidth) {
//   var length = string.length;
//   if (length > maxWidth) {
//     length = maxWidth;
//     string = string.substr(0, maxWidth);
//   }
//   console.log('+-' + '-'.repeat(length) + '-+');
//   console.log('| ' + ' '.repeat(length) + ' |');
//   console.log('| ' + string + ' |');
//   console.log('| ' + ' '.repeat(length) + ' |');
//   console.log('+-' + '-'.repeat(length) + '-+');
// }

// logInBox('To boldly go where no one has gone before.', 10);
// logInBox('');

// function stringy(integer) {
//   var string = '1';

//   for (var i = 1; i < integer; i++) {
//     if (string[i - 1] === '1') {
//       string += '0';
//     } else {
//       string += '1';
//     }
//   }

//   return string;
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

// function findFibonacciIndexByLength(digits) {
//   var fibonacci = 1;
//   var index = 2;
//   var prevFibonacci = 1;
//   var temp;

//   while (String(fibonacci).length < digits) {
//     temp = fibonacci;
//     fibonacci += prevFibonacci;
//     prevFibonacci = temp;
//     index += 1;
//   }
//   return index;
// }

// console.log(findFibonacciIndexByLength(2));       // 7
// console.log(findFibonacciIndexByLength(10));      // 45
// console.log(findFibonacciIndexByLength(16));      // 74

// function triangle(n) {
//   var stars = '';
//   var spaces;

//   for (var i = 1; i <= n; i++) {
//     stars += '*';
//     spaces = ' '.repeat(n - i);
//     console.log(spaces + stars);
//   }
// }

// triangle(5);
// triangle(9);

// var noun = prompt('Enter a noun:');
// var verb = prompt('Enter a verb:');
// var adjective = prompt('Enter an adjective:');
// var adverb = prompt('Enter an adverb:');

// console.log('Do you ' + verb + ' your ' + adjective + ' ' +
//             noun + ' ' + adverb + '? That\'s hilarious!')


// function twice(number) {
//   if (isDoubleNumber(number)) {
//     return number;
//   }

//   return number * 2;
// }

// function isDoubleNumber(number) {
//   var string = String(number);
//   var center = string.length / 2;

//   return (string.substr(0, center) === string.substr(center));
// }

// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676

// function getGrade(score1, score2, score3) {
//   var averageScore = (score1 + score2 + score3) / 3;

//   if (averageScore >= 90) {
//     return 'A';
//   } else if (averageScore >= 80) {
//     return 'B';
//   } else if (averageScore >= 70) {
//     return 'C';
//   } else if (averageScore >= 60) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// console.log(getGrade(95, 90, 93));    // "A"
// console.log(getGrade(50, 50, 95));    // "D"

// function cleanUp(string) {
//   var newString = string.replace(/[^a-zA-Z]+/g, ' ');
//   return newString;
// }

// console.log(cleanUp("---what's my +*& line?"));

function century(year) {
  var prefix = Math.ceil(year / 100);
  var suffix = 'th';
  var tensDigit = Math.floor((prefix % 100) / 10);

  if (tensDigit === 1) {
    suffix = 'th';
  } else if ((prefix % 10) === 1) {
    suffix = 'st';
  } else if ((prefix % 10) === 2){
    suffix = 'nd';
  } else if ((prefix % 10) === 3) {
    suffix = 'rd';
  }

  return String(prefix) + suffix;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
