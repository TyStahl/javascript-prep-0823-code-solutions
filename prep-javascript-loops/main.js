function whileLoop1() {
  const arrayNumbers10 = [];
  let i = 0;
  while (i < 10) {
    arrayNumbers10.push(i);
    i++;
  }
  return arrayNumbers10;
}

console.log('whileLoop1 output:', whileLoop1());

function whileLoop2() {
  const arrayNumbers18 = [];
  let i = 0;
  while (i <= 18) {
    arrayNumbers18.push(i);
    i += 2;
  }
  return arrayNumbers18;
}

console.log('whileLoop2: ', whileLoop2());

function forLoop1() {
  const arrayForNumbers10 = [];
  for (let i = 0; i < 10; i++) {
    arrayForNumbers10.push(i);
  }
  return arrayForNumbers10;
}

console.log('forLoop1', forLoop1());

function forLoop2() {
  const arrayCountdown = [];
  for (let i = 100; i >= 0; i--) {
    console.log('Time until explotion' + arrayCountdown.push(i) + '!');
  }
  return arrayCountdown;
}

forLoop2();

function forInLoop1(object) {
  const arrayOfPropNames = [];
  for (const property in object) {
    arrayOfPropNames.push(property);
  }
  return arrayOfPropNames;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log(forInLoop1(object));

function forInLoop2(object) {
  const arrayOfProps = [];
  for (const property in object) {
    arrayOfProps.push(object[property]);
  }
  return arrayOfProps;
}

console.log(forInLoop2(object));
