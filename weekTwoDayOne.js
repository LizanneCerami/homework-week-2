// You are given the following "car" object:
// let myCar = {brand: "Toyota", make: "Prius", color: "red"}. 
//Please use destructuring to access the color property.

// let myCar = {
//   brand: "Toyota",
//   make: "Prius",
//   color: "red"
// }

// const {color} = myCar

// console.log(color);

//Write a function that converts hours into seconds. Return the result. Invoke the function.

function convertsHoursIntoSeconds (hours) {
  const minutes = hours * 60;
  const seconds = minutes * 60;
  return seconds;
}

const totalSeconds = convertsHoursIntoSeconds(5);
console.log(totalSeconds);