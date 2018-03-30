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

function shortLongShort(string1, string2) {
  var long;
  var short;

  if (string1.length > string2.length) {
    long = string1;
    short = string2;
  } else {
    long = string2;
    short = string1;
  }

  console.log(short + long + short);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
