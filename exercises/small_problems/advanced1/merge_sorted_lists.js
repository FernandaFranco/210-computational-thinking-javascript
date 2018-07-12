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

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

