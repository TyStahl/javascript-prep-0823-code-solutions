const age = 32;
console.log('My age is ' + age);

function isAdult(age) {
  if (age < 18) {
    return false;
  } else return true;
}

console.log('I am an adult? ' + isAdult(age));

const student1Score = 69;

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else return false;
}

console.log('Student passed? ' + didStudentPass(student1Score));

const student2Score = 101;

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  }
  if (score < 70) {
    return 'D';
  }
  if (score < 80) {
    return 'C';
  }
  if (score < 90) {
    return 'B';
  }
  if (score < 100) {
    return 'A';
  } else return 'A++';
}

console.log('Students grade is ' + gradeCalculator(student2Score));

const season = 'spring';

function seasonManager(season) {
  if (season === 'summer') {
    return "it's hot today.";
  }
  if (season === 'spring') {
    return 'the flowers are blooming.';
  }
  if (season === 'autumn') {
    return 'the leaves are changing colors.';
  }
  if (season === 'winter') {
    return "it's cold today.";
  } else return 'please enter a valid season.';
}

console.log('Today ' + seasonManager(season));

const dayOfTheWeek = 'Thursday';

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === ('Saturday' || 'Sunday')) {
    return 'Have a good weekend!';
  } else return "It's a weekday.";
}

console.log('Today is ' + dayOfTheWeek + '. ' + dayDetector(dayOfTheWeek));
