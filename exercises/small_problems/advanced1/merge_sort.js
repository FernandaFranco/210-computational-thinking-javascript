/*
input: unsorted array
output: sorted array
requirement: break into nested arrays, then performing the merge algorithm from the previous exercise
- 1 array -> 2 arrays -> 4 arrays -> n^2 arrays where n is the number of iterations until each array contain only one element
- perform merge of sorted arrays -> (n-1)^2 arrays -> (n-2)^2 arrays -> 1 array

mental model: for each nested array, break it in two until length === 1.

for each array starting at index 1 of parent array, call merge function on it and previous array

OR
*/

function merge(array1, array2) {
  var newArray = [];
  var array1Idx = 0;
  var array2Idx = 0;

  while (true) {
    if (!array1[array1Idx]) {
      newArray = newArray.concat(array2.slice(array2Idx));
      break;
    } else if (!array2[array2Idx]) {
      newArray = newArray.concat(array1.slice(array1Idx));
      break;
    }

    if (array1[array1Idx] < array2[array2Idx]) {
      newArray.push(array1[array1Idx]);
      array1Idx += 1;
    } else {
      newArray.push(array2[array2Idx]);
      array2Idx += 1;
    }
  }

  return newArray;
}


function mergeSort(array) {
  var nested = array.map(function (element) {
    return [element];
  });
  var merged;

  while (nested.length > 1) {
    merged = merge(nested.shift(), nested.shift());
    nested.unshift(merged);
  }

  return nested;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    var firstPart = array.slice(0, array.length/2);
    var secondPart = array.slice(array.length/2);
    firstPart = mergeSort(firstPart);
    secondPart = mergeSort(secondPart);

    return merge(firstPart, secondPart);
  }
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
