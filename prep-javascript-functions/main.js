function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const addTwoNumbersResult = addTwoNumbers(1, 1);
console.log('"Add Two Numbers excercise": ' + addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const convertHoursToMinutesResult = convertHoursToMinutes(5);
console.log(
  '"Convert Hours to Minutes excercise": ' + convertHoursToMinutesResult
);

function getGreeting(name) {
  return 'Hello ' + name;
}
const getGreetingResult = getGreeting('World');
console.log('"Get Greetings excersize": ' + getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const addAndMultiplyBy5Result = addAndMultiplyBy5(5, 10);
console.log('"Add and Multiply By 5 excersize": ' + addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const multiplyAndDivideBy5Result = multiplyAndDivideBy5(50, 50);
console.log(
  '"Multiply and Divide By 5 excersize":' + multiplyAndDivideBy5Result
);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const subtractTwoNumbersResult = subtractTwoNumbers(5, 10);
console.log('"Subtract Two Numbers Exercise": ' + subtractTwoNumbersResult);

function getCircleCircumference(num) {
  return Math.pow(num, 2) * Math.PI;
}
const getCircleCircumferenceResult = getCircleCircumference(3);
console.log(
  '"Get Circle Circumference exercise": ' + getCircleCircumferenceResult
);

function getFullName(firstName, lastName) {
  return firstName + lastName;
}
const getFullNameResult = getFullName('Tyler', 'Stahl');
console.log('"Get Full Name exercise": ' + getFullNameResult);

function cube(num) {
  return num * num * num;
}
const cubeResult = cube(33);
console.log('"Cube exercise": ' + cubeResult);
