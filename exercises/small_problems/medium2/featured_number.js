/*
input: integer
output: next featured number greater than the integer. if no featured number, issue an error message
rules: a featured number is an integer that is:
- odd;
- multiple of 7;
- all digits occuring exactly once;
mental model: find the nearest multiple of 7 greater than input. if odd and contain unique digits,
return that number. if not, go to the next multiple of 7 and repeat.

test cases:
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(1);           //  7
featured(7);           //  21
featured(0);           //  7
featured(-10);           //  7

dt structures:
numbers

algorithm:
var candidate = number - (number % 7) + 7

while candidate even or digits repeated:
- candidate += 7;
end while

return candidate;

how to check if digits repeated:
create array of string digits
sort array
for each digit starting from index 1
if digit is equal to previous:
- return true
end for loop

return false

how to check if number is even:
return number % 2 === 0;
*/

function featured(number) {
  var MAX_FEATURED = 9876543201;
  var candidate = number - (number % 7) + 7;

  while (candidate < MAX_FEATURED && (isEven(candidate) || hasRepeatedDigits(candidate))) {
    candidate += 7;
  }

  if (candidate > MAX_FEATURED) return 'Error';
  return candidate;
}

function isEven(number) {
  return number % 2 === 0;
}

function hasRepeatedDigits(number) {
  var chars = String(number).split('');
  var i;

  chars.sort();

  for (i = 1; i < chars.length; i += 1) {
    if (chars[i] === chars[i - 1]) {
      return true;
    }
  }

  return false;
}

console.log(featured(1));           //  7
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));    // 9876543201
console.log(featured(9876543202));    // error
console.log(featured(7));           //  21
console.log(featured(0));           //  7



