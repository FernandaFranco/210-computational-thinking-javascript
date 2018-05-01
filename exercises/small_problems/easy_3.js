function howOldIsTeddy() {
  var age = getRandomAgeBetween(20, 200);

  console.log('Teddy is ' + String(age) + ' years old!');
}

function getRandomAgeBetween(number1, number2) {
  var min = Math.min(number1, number2);
  var max = Math.max(number1, number2);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// howOldIsTeddy();
// howOldIsTeddy();
// howOldIsTeddy();
// howOldIsTeddy();
// howOldIsTeddy();
// howOldIsTeddy();

var numbers = [];
var number;

var included =  function(element) {
  return element === number;
}

number = prompt('Enter the 1st number:');
numbers.push(number);
number = prompt('Enter the 2nd number:');
numbers.push(number);
number = prompt('Enter the 3rd number:');
numbers.push(number);
number = prompt('Enter the 4th number:');
numbers.push(number);
number = prompt('Enter the 5th number:');
numbers.push(number);
number = prompt('Enter the last number:');

sentence = 'The number ' + number + ' does not appear in [' + String(numbers) + '].'

if (numbers.some(included)) {
  sentence = 'The number ' + number + ' appears in [' + String(numbers) + '].'
}

console.log(sentence);
