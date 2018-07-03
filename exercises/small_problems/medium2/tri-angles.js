/*
input: 3 integers. 3 angles of a triangle.
output: string. 'right', 'acute', 'obtuse', or 'invalid'.
rules: to be a valid triangle,
- the sum of angles === 180;
- each angle > 0
requirements:
if not valid, is invalid
if one angle === 90, is right
if one angle is > 90, is obtuse
if all angles are < 90, is acute

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
triangle(30, 150, 50);       // "invalid"
triangle(0, 0, 0);       // "invalid"

dt structure:
array of angles

algorithm:
create array of angles
sort array
if angles[0] + angles[1] + angles[2] !== 180 || angles[0] <= 0 is invalid
if angles[2] === 90 is right
if angles[2] > 90 is obtuse
else is acute
*/

function triangle(angle1, angle2, angle3) {
  var angles = [angle1, angle2, angle3];
  angles.sort();

  if (angles[0] + angles[1] + angles[2] !== 180 || angles[0] <= 0) {
    return 'invalid';
  } else if (angles[2] === 90) {
    return 'right';
  } else if (angles[2] > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
console.log(triangle(30, 150, 50));       // "invalid"
console.log(triangle(0, 0, 0));       // "invalid"

