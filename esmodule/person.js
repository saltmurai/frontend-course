// person.js
const person = {
  name: "John",
  age: 30,
  location: "Malaysia",
};
const greeting = () => console.log("Hello");
const doABackflip = () => {
  const backFlip = "🤸‍♂️";
  console.log(backFlip);
};
export default person;
export { greeting, doABackflip };
