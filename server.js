const person = {
  name: "John",
  location: "Malaysia",
  job: "Software Engineer",
  age: 30,
};

console.log(person.age);
const newPerson = {
  ...person,
  age: 40,
};

console.log(newPerson);
