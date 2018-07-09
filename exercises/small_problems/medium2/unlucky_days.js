/*
input: year as a number
output: count of fridays the 13ths in that year
rules: year > 1752
year can be greater than current year
mental model: given a year, get the weekdays of all 12 month days 13ths. if the
weekday is a friday, add 1 to the count.

test cases:
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
fridayThe13ths(1753);      //
fridayThe13ths(3753);      //

data strunctures:
date as Date objs (from number)

algorithm:
new date obj
new count = 0
iterate from 0 to 11
set month to i
if getDay === 5
- count += 1
end loop
return count
*/

function fridayThe13ths(year) {
  var date = new Date(year, 0, 13);
  var fridaysCount = 0;
  var i;

  for (i = 0; i < 12; i += 1) {
    date.setMonth(i);
    if (date.getDay() === 5) {
      fridaysCount += 1;
    }
  }

  return fridaysCount;
}

function fridayThe13ths(year) {
  var thirteenths = [];
  var i;

  for (i = 0; i < 12; i += 1) {
    thirteenths.push(new Date(year, i, 13));
  }

  return thirteenths.filter(function (day) {
    return day.getDay() === 5 ;
  }).length;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(1753));      //
console.log(fridayThe13ths(3753));      //

