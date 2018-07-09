/*
input: text template I have to define
output: text from template + random words
requirements:
given a template include one word from each group in the correspondent slot from template.

example of template:
template1 = "The adjective brown noun adverb verb the adjective yellow noun, who adverb verb his noun and looks around."
template2 = "The noun verb the noun's noun."

mental model:
break string into array of words
for each word
- if adjective, noun, verb or adverb, replace it for a random word in each array
- otherwise, do nothing
return array joined into a string

test cases:

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".
*/

var REPLACEMENT_TEXTS = {
 adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
 noun: ['fox', 'dog', 'head', 'leg', 'tail'],
 verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
 adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
}

function madlibs(template) {

  return template.replace(/\b\w+\b/gi, randomWord);
  // var words = template.split(' ');

  // words.forEach(function (word, index) {
  //   if (word === 'adjective') {
  //     randomIndex = getRandomIdx(ADJECTIVES.length);
  //     words[index] = ADJECTIVES[randomIndex];
  //   } else if (word === 'noun') {
  //     randomIndex = getRandomIdx(NOUNS.length);
  //     words[index] = NOUNS[randomIndex];
  //   } else if (word === 'adverb') {
  //     randomIndex = getRandomIdx(ADVERBS.length);
  //     words[index] = ADVERBS[randomIndex];
  //   } else if (word === 'verb') {
  //     randomIndex = getRandomIdx(VERBS.length);
  //     words[index] = VERBS[randomIndex];
  //   }
  // });

  // return words.join(' ');
}

function randomWord(match) {
  if (REPLACEMENT_TEXTS[match]) {
    return REPLACEMENT_TEXTS[match][getRandomIdx(REPLACEMENT_TEXTS[match].length)];
  } else {
    return match;
  }
}

function getRandomIdx(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var template1 = "The adjective brown noun adverb verb the adjective yellow noun, who adverb verb his noun and looks around."
var template2 = "The noun verb the noun's noun."


console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".
