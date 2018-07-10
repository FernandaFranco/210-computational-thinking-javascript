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

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
