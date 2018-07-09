/*
input: array of same type elements. contains at least 2 elements.
output: mutated array, sorted by bubble sort.

requirements:
- iterate from index 1 to length - 1 (covering pairs)
- does it multiple times, until no swapping is made (reseting swap var to false at the beginning of each cycle)
- for each i, compare element[i-1] > element[i]
- if true, swap and set swap var to true
- if not, do nothing
- at end of for loop, start it again if swap var is true and reset it to false

test cases:
var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

data structures:
array mutations

algorithm:
var swap = true;
var temp;
while swap:
for i = 1 to last index:
if array[i-1] > array[i]:
- temp = array[i];
- array[i] = array[i-1];
- array[i-1] = temp;
- swap = true;
end if
end for
swap = false;
end while;

return array;
*/

function bubbleSort(array) {
  var swapped = true;
  var iterations = 1;
  var temp;
  var i;

  while (swapped) {
    console.log(iterations);
    swapped = false;
    for (i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        swap(array, i - 1, i);
        swapped = true;
      }
    }
    iterations += 1;
  }
}

function swap(array, id1, id2) {
  temp = array[id2];
  array[id2] = array[id1];
  array[id1] = temp;
}

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [3, 5];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [3, 5, 6, 7, 8, 9, 10];
bubbleSort(array);
console.log(array);

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

