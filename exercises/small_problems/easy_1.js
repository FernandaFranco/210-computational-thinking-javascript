// var i;
// var lowerLimit;
// var upperLimit;
// var number;

// lowerLimit = Number(prompt('Specify the lower limit: (inclusive)'));
// upperLimit = Number(prompt('Specify the upper limit: (inclusive)'));
// number = lowerLimit;
// if (lowerLimit % 2 === 1) number += 1;

// do {
//   console.log(number);
//   number += 2;
// } while (number <= upperLimit);

// var areaOther;
// var typeOther;
// var SQMETERS_TO_SQFEET = 10.7639;
// var inputType = prompt('Meters or feet?');
// var length = Number(prompt('Enter the length of the room in ' + inputType + ':'));
// var width = Number(prompt('Enter the width of the room in ' + inputType + ':'));
// var area = length * width;
// if (inputType === 'meters') {
//   areaOther = area * SQMETERS_TO_SQFEET;
//   typeOther = 'feet';
// } else if (inputType === 'feet') {
//   areaOther = area / SQMETERS_TO_SQFEET;
//   typeOther = 'meters';
// }

// console.log('The area of the room is ' + area.toFixed(2) + ' square ' + inputType + ' (' + areaOther.toFixed(2) + ' square ' + typeOther + ').');

// var billAmount = Number(prompt('What is the bill?'));
// var tipPercentage = Number(prompt('What is the tip percentage?'));

// var tip = (tipPercentage/100) * billAmount;
// var total = billAmount + tip;

// console.log('The tip is $' + tip.toFixed(2));
// console.log('The total is $' + total.toFixed(2));

// var integer = Number(prompt('Please enter an integer greater than 0:'));


// var array = [5,6,7,8,9];
// var operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.');
// var result;

// if (operation === 's') {
//   operation = 'sum';
//   result = array.reduce(
//   ( accumulator, currentValue ) => accumulator + currentValue,
//   0
// );
// } else if (operation === 'p') {
//   operation = 'product';
//   result = array.reduce(
//   ( accumulator, currentValue ) => accumulator * currentValue,
//   1
// );
// }

// // for (var i = 1; i <= integer; i++) {
// //   if (operation === 'sum') {
// //     result += i;
// //   } else if (operation === 'product') {
// //     result *= i;
// //   }
// // }

// console.log('The ' + operation + ' of the integers between ' + array[0] + ' and ' + array[array.length - 1] + ' is ' + result.toFixed(0) + '.');

// function shortLongShort(string1, string2) {
//   var long;
//   var short;

//   if (string1.length > string2.length) {
//     long = string1;
//     short = string2;
//   } else {
//     long = string2;
//     short = string1;
//   }

//   console.log(short + long + short);
// }

// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

// function isLeapYear(year) {
//   if (year < 1752) {
//     return (year % 4 === 0);
//   }

//   if (year % 4 === 0) {
//     if (year % 100 === 0 ) {
//       if (year % 400 === 0) {
//         return true
//       }
//       return false
//     }
//     return true
//   }

//   return false
// }

// console.log(isLeapYear(2016) == true);
// console.log(isLeapYear(2015) == false);
// console.log(isLeapYear(2100) == false);
// console.log(isLeapYear(2400) == true);
// console.log(isLeapYear(240000) == true);
// console.log(isLeapYear(240001) == false);
// console.log(isLeapYear(2000) == true);
// console.log(isLeapYear(1900) == false);
// console.log(isLeapYear(1752) == true);
// console.log(isLeapYear(1700) == true);
// console.log(isLeapYear(1) == false);
// console.log(isLeapYear(100) == true);
// console.log(isLeapYear(400) == true);

// function multisum(number) {
//   var i;
//   var sum = 0;

//   for (i = 1; i <= number; i++){
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168

function asciiValue(string) {
  var i;
  var sum = 0;

  for (i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i);
  }

  return sum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
