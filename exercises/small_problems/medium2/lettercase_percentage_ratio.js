/*
input: string that contains at least 1 char: lowercase letters, uppercase letter, other chars
output: object with 3 properties:
- percentage of lowercase
- percentage of uppercase
- percentage of neither
rules: only letters can be upper/lower
create object with values 0 for each property
get number of chars in string
mental model: for each char in the string, check if letter. if lowercase, add 1
to the lowercase property. if upper, add 1 to the upper prop. if not letter, add 1 to
the neither prop
for each prop in object, divide value by number of chars and multiply result by 100 to get percentages

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

data structures:
string for input as iterating
object for storing results

algorithm:
*/

function letterPercentages(string) {
  var percentages = {
    'lowercase': 0,
    'uppercase': 0,
    'neither': 0,
  };
  var length = string.length;
  var uppercasePattern = /[A-Z]/;
  var lowercasePattern = /[a-z]/;
  var i;

  for (i = 0; i < length; i += 1) {
    if (uppercasePattern.test(string[i])) {
      percentages['uppercase'] += 1;
    } else if (lowercasePattern.test(string[i])) {
      percentages['lowercase'] += 1;
    } else {
      percentages['neither'] += 1;
    }
  }

  Object.keys(percentages).forEach(function (key) {
    percentages[key] = (percentages[key]/length * 100).toFixed(2);
  });
  return percentages;
}

function letterPercentages(string) {
  return {
    'lowercase': (((string.match(/[a-z]/g) || []).length /
                    string.length) * 100
                 ).toFixed(2),
    'uppercase': (((string.match(/[A-Z]/g) || []).length /
                    string.length) * 100
                 ).toFixed(2),
    'neither': (((string.match(/[^A-Z]/gi) || []).length /
                  string.length) * 100
                 ).toFixed(2),
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
console.log(letterPercentages('12oefCZMc 9JIXPOQWnx`2-=00m3'));

