function dateSuffix(day) {
    var suffix = 'th';
    var stringDate = String(day);
    var lastIndex = stringDate.length - 1;

    if (stringDate[lastIndex - 1] === '1') {
      return stringDate + suffix;
    }

    if (stringDate[lastIndex] === '1') {
      suffix = 'st';
    } else if (stringDate[lastIndex] === '2') {
      suffix = 'nd';
    } else if (stringDate[lastIndex] === '3') {
      suffix = 'rd';
    }

    return stringDate + suffix;
}

var today = new Date();

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  return formattedDay(date) + ", " +
         formattedMonth(date) + " " +
         dateSuffix(date.getDate());
}

console.log("Today's date is " + formattedDate(today));
console.log(today.getYear()); // deprecated
console.log(today.getFullYear());
console.log(today.getTime());


var tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);

console.log("Tomorrow's date is " + formattedDate(tomorrow));

var nextWeek = new Date(today.getTime());
console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate + 7);
console.log(today.toDateString() === nextWeek.toDateString());

function formatTime(date) {
  var hour = String(date.getHours());
  var minutes = String(date.getMinutes());

  if (hour.length < 2) {
    hour = '0' + hour;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  return hour + ':' + minutes;
}

console.log(formatTime(today));
