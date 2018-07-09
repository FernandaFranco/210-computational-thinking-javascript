/*
input: positive integer n, where n is the first n positive integers
output: integer representing the diff between the sq of the sum and the sum of the sq
requirements:
- given n, find the n first positive integers
- get the sum
- find the square root of the sum
- find the square root of each positive integers
- sum those sq rt
- get the difference between those two values

test cases:
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150


data structures:

array containing first n numbers > reduce sum > sq root
                                 > map sq root > reduce sum
return number

algorithm:
create empty array
for i from 1 to n inclusive:
push i into array

reduce array to sum of numbers
take square root of the sum
store result as first operand

map array to sq root of numbers
reduce to sum
store result as second operand
return first - second
*/

function sumSquareDifference(number) {
  var firstNPositiveIntegers = [];
  var firstOperand;
  var secondOperand;
  var i;

  for (i = 1; i <= number; i += 1) {
    firstNPositiveIntegers.push(i);
  }

  firstOperand = firstNPositiveIntegers.reduce(sum) ** 2;

  secondOperand = firstNPositiveIntegers.map(function (int) {
    return int ** 2;
  }).reduce(sum);

  return firstOperand - secondOperand;
}

function sum(total, number) {
  return total + number;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

