const person = {
  firstName: 'Billy Bob',
  lastName: 'Thornton',
  hobby: 'photography',
};
console.log(person);

const fullName =
  "This person's name is " + person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'acting';
console.log("This person's job is" + ' ' + person.job);

person.previousJob = 'Santa at the Mall';
console.log("This person's previous job was" + ' ' + person.previousJob);

console.log(person);
