/*
input: 3 numbers: lengths of 3 sides of a triangle;
output: string: 'equilateral', 'isosceles', 'scalene', or 'invalid';
rules:
invalid if:
- the sum of the 2 shortest sides smaller or equal than the longest side;
- any side has length <= 0;
equilateral if:
- all 3 sides are equal length;
isosceles:
- two sides of equal length;
scalene:
- no side is equal to another
requirements: given 3 sides of a triangle, determine if sides form a valid triangle.
If true, determine what type. If not, return invalid;

test cases:
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
triangle(3, 3, 6);        // "invalid"
triangle(3, 3, 5);        // "isosceles"

data structures: array (to sort)

algorithm:
sort array with side lengths from min to max;
if array[0] <= 0 or array[0] + array[1] <= array[2];
return invalid
if array[0] === array[1] and array[1] === array[2]
return equilateral;
if array[0] === array[1] or array[1] === array[2]]
return isosceles
else
return scalene
*/

function triangle(side1, side2, side3) {
  var sides = Array.prototype.slice.call(arguments)
  sides.sort();

  if (sides[0] <= 0 || (sides[0] + sides[1]) <= sides[2]) {
    return 'invalid';
  } else if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return 'equilateral';
  } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(3, 3, 6));        // "invalid"
console.log(triangle(3, 3, 5));        // "isosceles"
