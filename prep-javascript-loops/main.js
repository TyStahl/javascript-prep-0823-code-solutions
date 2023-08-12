function whileLoop1() {
  const Array = [];
  let i = 0;
  while (i < 10) {
    Array.push(i);
    i++;
  }
  return Array;
}

console.log('whileLoop1 output:', whileLoop1());

function whileLoop2() {
  const Array = [];
  let i = 0;
  while (i <= 18) {
    Array.push(i);
    i += 2;
  }
  return Array;
}

console.log('whileLoop2: ', whileLoop2());

function forLoop1() {
  const Array = [];
  for (let i = 0; i < 10; i++) {
    Array.push(i);
  }
  return Array;
}

console.log('forLoop1', forLoop1());

function forLoop2() {
  const Array = [];
  for (let i = 100; i >= 0; i--) {
    console.log('Time until explotion' + Array.push(i) + '!');
  }
  return Array;
}

forLoop2();

function forInLoop1(object) {
  const Array = [];
  for (const property in object) {
    Array.push(property);
  }
  return Array;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log(forInLoop1(object));

function forInLoop2(object) {
  const Array = [];
  for (const property in object) {
    Array.push(object[property]);
  }
  return Array;
}

console.log(forInLoop2(object));
