// write a function that returns the sum of all digits in an integer
// break down integer into an array of characters;
// transform characters into integer digits: map;
//

function sum(integer) {
  var digits = String(integer).split('').map(function (char) {
    return parseInt(char, 10);
  });

  return digits.reduce(function (sum, digit) {
    return sum + digit;
  });
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

// function takes array of integers between 0 and 19
// returns arrays of integers sorted based on the english name
// constant: array of english names corresponding to its index;
// sorts an array: sort

function wordSort(num1, num2) {
  var ALPHABETIC_NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (ALPHABETIC_NUMBERS[num1] > ALPHABETIC_NUMBERS[num2]) {
    return 1;
  } else if (ALPHABETIC_NUMBERS[num1] < ALPHABETIC_NUMBERS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(numbers) {
  return numbers.sort(wordSort);
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


function multiplyAllPairs(array1, array2) {
  var result = [];
  array1.forEach(function (number1) {
    array2.forEach(function (number2) {
      result.push(number1 * number2);
    });
  });

  return result.sort(function (num1, num2) {
    return num1 - num2;
  });
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

function sum(total, num) {
      return total + num;
    }
function sumOfSums(array) {
  return array.map(function (number, index, array) {
    return array.slice(0, index + 1).reduce(sum);
  }).reduce(sum);
}
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

function substringsAtStart(string) {
  return string.split('').map(function (char, index) {
    return string.slice(0, index + 1);
  });
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function substrings(string) {
  var result = [];
  string.split('').forEach(function (char, index) {
    result = result.concat(substringsAtStart(string.slice(index)));
  })

  return result;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

function isPalindrome(substring) {
  return substring.length > 1 && substring === substring.split('').reverse().join('');
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  // "adam-did-mada", "dam-did-mfunkbeerad", "am-did-ma", "m-did-m", "-did-", "did",
  // "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

function buyFruit(list) {
  var result = [];
  var i;

  list.forEach(function (item) {
    for (i = 0; i < item[1]; i += 1) {
      result = result.concat(item[0]);
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(function (inventory) {
    return inventory.id === inventoryItem;
  })
}

var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
  // { id: 101, movement: "in",  quantity: 12 },
  // { id: 101, movement: "out", quantity: 18 }, ]

function isItemAvailable(item, transactions) {
  var quantity;
  var balance = transactionsFor(item, transactions).reduce(function (total, transaction) {
    quantity = transaction.quantity;
    if (transaction.movement === 'out') {
      quantity = - quantity;
    }
    return total + quantity;
  }, 0);

  return balance > 0;

}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

