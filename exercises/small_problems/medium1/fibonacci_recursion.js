/*
1 = F(1)
1 = F(2)
2 = F(1) + F(2) = F(3)
3 = F(2) + F(3) = F(4)
5 = F(3) + F(4) = F(5)
.
.
.
F(n) = F(n - 2) + F(n - 1)

input: integer n where n is the position of the nth fibonacci number
output: nth fibonacci number
requirements: use recursion (the function must call itself, has an ending
condition, the result of calling itself is used in each step)
mental model: if n is > 2, result of f(n) is the sum of f(n-1) + f(n-2).
if n <= 2, result of f(n) is 1.

test cases:
fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

data structure:
integer

algorithm:
if n > 2
- return f(n - 1) + f(n -2)
else
- return 1;
*/

function fibonacci(position) {
  if (position > 2) {
    return fibonacci(position - 1) + fibonacci(position - 2);
  } else {
    return 1;
  }
}
/*
procedural fibonacci:
input: integer n where n is the position of the nth fibonacci number
output: nth fibonacci number
requirements: for each fibonacci position > 2 and <= position, get the fibonacci number by
doing f(n - 1) + f(n - 2). before the next iteration, do f(n - 2) = f(n - 1) and f(n - 1) = f(n).
return the f(n) from the last iteration

algorithm:
f(n-2) = 1
f(n-1) = 1
for i > 2 and i <= position:
- f(n) = f(n - 1) + f(n - 2);
- f(n - 2) = f(n-1);
- f(n - 1) = f(n);
end for loop

return f(n);
*/
function fibonacci(position) {
  var previousTwo = [1, 1];
  var i;

  for (i = 3; i <= position; i += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}

/*
recursion with memoization:
requirements: use an object with pairs of key/values as a lookup table.
for each n, retrieve the value in n - 1 and n - 2 in the object. if undefined, retrieve again
*/

var fibonacciNumbers = {};
function fibonacci(position) {
  if (position > 2) {
    fibonacciNumbers[position] = fibonacci(position - 1) + fibonacciNumbers[position - 2];
  } else {
    fibonacciNumbers[position] = 1;
  }
  return fibonacciNumbers[position];
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));      // 12586269025
console.log(fibonacci(100));      // 354224848179261915075
console.log(fibonacci(10000));
