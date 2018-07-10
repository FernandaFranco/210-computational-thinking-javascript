/*
transposing: [1][1] ->[1][1]
transposing: [1][2] ->[2][1]
transposing: [1][3] ->[3][1]

for each row, for a column on new array, swapping the indexes
*/

function transpose(matrix) {
  var transposed = [];
  matrix.forEach(function (row, rowIdx) {
    row.forEach(function (element, columnIdx) {
      transposed[columnIdx] = transposed[columnIdx] || [];

      transposed[columnIdx][rowIdx] = element;
    });
  })

  return transposed;
}

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
