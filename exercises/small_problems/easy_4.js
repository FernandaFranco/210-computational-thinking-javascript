var DEGREE = '\xB0';
var MINUTES_PER_DEGREE = 60;
var SECONDS_PER_MINUTE = 60;

function dms(angle) {
  if (angle < 0) {
    angle = 360 + angle;
  }
  var degree = Math.floor(angle);
  var minutes = Math.floor((angle % 1) * MINUTES_PER_DEGREE);
  var seconds = Math.floor((((angle % 1) * MINUTES_PER_DEGREE) % 1) * SECONDS_PER_MINUTE);

  return String(degree) + DEGREE + padWithZeroes(minutes) + "'" + padWithZeroes(seconds) + '"';
}

function padWithZeroes(number) {
  var numString = String(number);
  if (numString.length === 1) {
    numString = '0' + numString;
  }

  return numString;
}

// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"
// console.log(dms(-160.342));          // 200°00'00"

function union(array1, array2) {
  function pushUniqueValues(array) {
    array.forEach(function (element) {
                    if (resultArray.indexOf(element) === -1) {
                      resultArray.push(element);
                    }
                  });
  }

  var resultArray = [];

  // for (var i = 0; i < array1.length; i++) {
  //   if (resultArray.indexOf(array1[i]) === -1) {
  //     resultArray.push(array1[i]);
  //   }
  // }

  pushUniqueValues(array1);

  // for (var i = 0; i < array2.length; i++) {
  //   if (resultArray.indexOf(array2[i]) === -1) {
  //     resultArray.push(array2[i]);
  //   }
  // }

  pushUniqueValues(array2);

  return resultArray;
}


// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

function halvsies(array) {
  var firstHalf = [];
  var secondHalf = [];
  array.forEach(function (value, index) {
    if (index < array.length/2) {
      firstHalf.push(value);
    } else {
      secondHalf.push(value);
    }
  });

  return [firstHalf, secondHalf];
}

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

function findDup(array) {
  var i;

  for (i = 0; i < array.length; i += 1) {
    if (array.indexOf(array[i]) !== i) {
      return array[i];
    }
  }
}

// console.log(findDup([1, 5, 3, 1]));                                // 1
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         // 38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         // 14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         // 78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         // 89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         // 41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         // 55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         // 85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         // 40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
         //  7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73

function interleave(array1, array2) {
  result = [];
  for (var i = 0; i < array1.length; i++) {
    result.push(array1[i], array2[i]);
  }

  return result;
}

// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

function showMultiplicativeAverage(array) {
  var product = array.reduce(function (mult, value) {
    return mult * value;
  });

  return (product / array.length).toFixed(3);
}

// console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
// console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

function multiplyList(array1, array2) {
  return array1.map(function (value, index) {
           return value * array2[index];
         });
}

// console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

function digitList(integer) {
  strings = String(integer).split('');

  return strings.map(function (string) {
    return parseInt(string, 10);
  });
}

// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]

function countOccurrences(array) {
  var count = {};

  for (var i = 0; i < array.length; i++) {
    count[array[i]] = count[array[i]] || 0;
    count[array[i]] += 1;
  }

  for (var key in count) {
    console.log(key + ' => ' + count[key]);
  }
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// console output
car => 4
truck => 3
SUV => 1
motorcycle => 2

function average(array) {
  var total = array.reduce(function (sum, value) {
    return sum + value;
  })

  return Math.floor((total/array.length));
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40

