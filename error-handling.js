// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// The try .. catch block allows us to test a statement that may print an error without the stopping execution of all code.
// try {let res = sum(null);
// console.log(res);}
// catch {
//   console.error("Error occurred")
// }

// 2.
// tests
function sayName(name) {
if (typeof name !== "string") {
  throw new Error ("Invalid name! Must be a string!")
} 
return name
}
// // Do not have to print to terminal to see the result of the invocations
// try {console.log(sayName("Alex"));
// sayName(1);
// } 
// // can pass an error parameter to create a message only if the function has an error message
// catch (error) {
//   console.error(error.name + ": " + error.message)
// }



// 3.
//function greet(greeting) {
  //if (!greeting) {
    //throw new Error("There was no greeting given.");
  //}

  //console.log(greeting);
//}

