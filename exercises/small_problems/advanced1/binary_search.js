/*
input: array, searchItem
output: index of the searchItem if found, -1 otherwise
rules:
- array argument is sorted
requirements:
- if array.length === 1 and element is not equal to searchItem, return -1
- take an array, find the middle element. if it is equal to searchItem, return index.
If less than searchItem, array is now a slice of the original array starting after the middle element.
If greater than searchItem, array is equal to array.slice(0, middleElementIndex). Repeat the process.
mental model: given an array and a search item, check if middle element is equal to searchItem.
call function again using the appropriate half of the array as the input array. end function when middle element
is equal to searchItem, or if search item is not present;

new mental model:
find and store middle index. if middle element is equal to search item, return middle index.
if greater:
- last index = middle index;
- new middle index = (last index - initial index) / 2;
- repeat process
if less:
- initial index = middle index;
- new middle index = (last index - initial index) / 2;
- repeat process

if middle index === 0 return -1

test cases:
var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Ruby Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6

algorithm:

create middleIdx
lastIdx = array.length -1
initialIdx = 0

start loop
middleIdx = (last index - initial index) / 2

if middleIdx === 0
return -1

if array[middleIdx] === searchItem
return middleIdx

else if array[middleIdx] > searchItem
lastIdx = middleIdx

else if array[middleIdx] < searchItem
initialIdx = middleIdx

end loop


repeat until return
*/

function binarySearch(array, searchItem) {
  var initialIdx = 0;
  var lastIdx = array.length;
  var middleIdx;

  while (true) {
    middleIdx = Math.floor((lastIdx - initialIdx) / 2) + initialIdx;

    if (array[middleIdx] === searchItem) {
      return middleIdx;
    }

    if (middleIdx === initialIdx) {
      return -1;
    }

    if (array[middleIdx] > searchItem) {
      lastIdx = middleIdx;
    } else if (array[middleIdx] < searchItem) {
      initialIdx = middleIdx;
    }
  }
}

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Ruby Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6



