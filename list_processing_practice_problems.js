// takes arrays of arrays
// for each nested array, multiply elements inside: map
// sum product of nested arrays: reduce

function totalArea(array) {
  var areas = array.map(getRectangleArea);

  return areas.reduce(sumAreas);

  function getRectangleArea(rectangle) {
    return rectangle[0] * rectangle[1];
  }

  function sumAreas(sum, area) {
    return sum + area;
  }
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalArea(rectangles));    // 141

// takes arrays of arrays
// filters to contain only nested arrays whose elements are equal: filter
// for each nested array, multiply elements inside: map
// sum product of nested arrays: reduce

function totalSquareArea(array) {
  var squares = array.filter(isSquare);

  return totalArea(squares);

  function isSquare(rectangle) {
    return (rectangle[0] === rectangle[1]);
  }
}

// console.log(totalSquareArea(rectangles));    // 121

var newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];


// loop through data entries
// check if entry contains title and id
// keep only those entries: filter
// for those entries, keep only title and id: map

function processReleaseData(data) {
  var filteredData = data.filter(hasTitleAndId);

  return filteredData.map(keepTitleAndId);

  function hasTitleAndId(release) {
    return release.title && (release.id >= 0);
  }

  function keepTitleAndId(release) {
    return {
      id: release.id,
      title: release.title,
    };
  }
}

// console.log(processReleaseData(newReleases));

// should return:
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];

// map with index and reduce
function octalToDecimal(numberString) {
  var numberArray = numberString.split('').reverse();

  return numberArray.map(multiplyByPowersOf8).reduce(sum);

  function multiplyByPowersOf8(digit, index) {
    return parseInt(digit, 10) * Math.pow(8, index);
  }

  function sum(total, value) {
    return total + value;
  }
}

// console.log(octalToDecimal('1'));           // 1
// console.log(octalToDecimal('10'));          // 8
// console.log(octalToDecimal('130'));         // 88
// console.log(octalToDecimal('17'));          // 15
// console.log(octalToDecimal('2047'));        // 1063
// console.log(octalToDecimal('011'));         // 9

// function anagram(word, list) {
//   var chars;

//   return list.filter(function (candidate) {
//     chars = word.split('');
//     for (var i = 0; i < candidate.length; i++) {
//       var charIndex = chars.indexOf(candidate[i]);
//       if (charIndex === -1) {
//         return false;
//       } else {
//         chars.splice(charIndex, 1);
//       }
//     }

//     return true;
//   });
// }

function anagram(word, list) {
  return list.filter(function (candidate) {
    return areAnagrams(candidate, word)
  });
}

function areAnagrams(source, target) {
  var sourceLetters = source.split('').sort();
  var targetLetters = target.split('').sort();
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(bands) {
  return bands.map(function (band) {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);

    return band;
  });
}

function updateCountry(band) {
  band.country = 'Canada';
}

function capitalizeBandName(band) {
  band.name = band.name.split(' ').map(capitalizeWord).join(' ');
}

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function removeDotsInBandName(band) {
  band.name = band.name.replace(/\./g, '');
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]

// take average from 4 exams
// sum scores from all exercises
// apply weights and sum
// round to nearest integer
// determine equivalent letter grade
// combine percent grade and letter grade

var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  var scoreData = Object.keys(scores).map(function (student) {
    return scores[student].scores;
  });

  var examData = scoreData.map(function (score) {
    return score.exams;
  });

  return {
    studentGrades: scoreData.map(function (scoreObj) {
      return getStudentScore(scoreObj);
    }),
    exams: getExamSummary(examData),
  }
}

function getStudentScore(scoreObj) {
  var averageExamGrade = scoreObj.exams.reduce(function (total, score) {
    return total + score;
  })/4;

  var totalExerciseGrade = scoreObj.exercises.reduce(function (total, score) {
    return total + score;
  });

  var percentageGrade = Math.round(averageExamGrade * .65 + totalExerciseGrade * .35);


  var getLetterGrade = function (percentageGrade) {
    if (percentageGrade >= 93) {
      return 'A';
    } else if (percentageGrade >= 85 && percentageGrade <= 92){
      return 'B';
    } else if (percentageGrade >= 77 && percentageGrade <= 84){
      return 'C';
    } else if (percentageGrade >= 69 && percentageGrade <= 76){
      return 'D';
    } else if (percentageGrade >= 60 && percentageGrade <= 68) {
      return 'E';
    } else if (percentageGrade <= 59) {
      return 'F';
    }
  }

  return String(percentageGrade) + ' (' + getLetterGrade(percentageGrade) + ')';
}

function getExamSummary(examData) {
  var exam1Scores = [];
  var exam2Scores = [];
  var exam3Scores = [];
  var exam4Scores = [];
  var allExamsScores;
  var allExamsStats;

  examData.forEach(function (studentExams) {
    exam1Scores.push(studentExams[0]);
    exam2Scores.push(studentExams[1]);
    exam3Scores.push(studentExams[2]);
    exam4Scores.push(studentExams[3]);
  });

  allExamsScores = [exam1Scores, exam2Scores, exam3Scores, exam4Scores];

  return allExamsScores.map(function (examScores) {
    return {
      average: examScores.reduce(function (total, score) { return total += score })/5,
      minimum: examScores.reduce(function (min, score) {
        return score < min ? score : min;
      }),
      maximum: examScores.reduce(function (max, score) {
        return score > max ? score : max;
      }),
    }
  });
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }

function isAllUnique(string) {
  var seen = {};
  var lowerCasedString = string.toLowerCase();
  var i;

  for (i = 0; i < string.length; i += 1) {
    if (lowerCasedString[i] === ' ') {
      continue;
    }

    if (seen[lowerCasedString[i]]) {
      return false;
    } else {
      seen[lowerCasedString[i]] = true;
    }
  }

  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true
