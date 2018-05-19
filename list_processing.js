function myForEach(array, func) {
  var i;

  for (i = 0; i < array.length; i+= 1) {
    func(array[i], i, array);
  }
}

var min = Infinity;
var getMin = function (value) {
  min = value <= min ? value : min;
};

myForEach([4, 5, 12, 23, 3], getMin);    // undefined
console.log(min);                        // 3

function myFilter(array, func) {
  var newArray = [];
  array.forEach(function (element) {
    if (func(element)) {
      newArray.push(element);
    }
  });

  return newArray;
}

var isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

function multiplesOfThreeOrFive(values) {
  return values.filter(isMultipleOfThreeOrFive)
}

var isMultipleOfThreeOrFive = function (value) {
  return value % 5 === 0 || value % 3 === 0;
};

multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]);  // [ 3, 5, 18, 15 ]

function myMap(array, func) {
  var newArray = [];

  array.forEach(function (value, index) {
    newArray[index] = func(value);
  });

  return newArray;
}

var plusOne = function (n) { return n + 1; };

myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]

function getBooksTitle(books) {
  return myMap(books, getTitle);
}

var books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

var getTitle = function (book) {
  return book['title'];
};

getBooksTitle(books);
// console output

function myReduce(array, func, initial) {
  var value;
  var index;

  if (initial === undefined) {
    value = array[0];
    index = 1;
  } else {
    value = initial;
    index = 0;
  }

  array.slice(index).forEach(function (element) {
    value = func(value, element);
  });

  return value;
}

var smallest = function (result, value) {
  return result <= value ? result : value;
};

var sum = function (result, value) {
  return result + value;
};

myReduce([5, 12, 15, 1, 6], smallest);           // 1
myReduce([5, 12, 15, 1, 6], sum, 10);            // 49

function longestWord(words) {
  return myReduce(words, longest);
}

var longest = function (result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
};

longestWord(['abc', 'launch', 'targets', '']);      // "targets"

function myOwnEvery(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

var isAString = function (value) {
  return typeof value === 'string';
};

myOwnEvery(['a', 'a234', '1abc'], isAString);       // true

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

var isANumber = function (value) {
  return typeof value === 'number' && !Number.isNaN(value);
};

areAllNumbers([1, 5, 6, 7, '1']);             // false
areAllNumbers([1, 5, 6, 7, 1]);               // true
areAllNumbers([1, 5, 6, 7, NaN]);             // false

