/*
input: two sorted arrays
output: the two arrays combined in one sorted array
requirements: given two arrays, go through each element and sort it in a new array
rules:
- don't use sort array method;
- do not mutate input arrays;
mental model:
two given arrays are already sorted: compare elements from them by
index, if the smaller number is smaller than the previous number added to
array, switch them. add greater number. move on to next index.

test cases:
merge([1, 2, 3], [100, 200, 300]) // [1, 2, 3, 100, 200, 300]
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

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

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

