// Predict and explain first...
//Ans: The code defines a function called sum that takes two parameters a and b.

//Inside the function, it simply prints out the result of adding a and b using return a * b.

// After defining the function, the code calls the sum function, passing 10 and 32 as the arguments.

// The results of the function call are inserted into a template literal `The result of adding 10 and 32 is ${multiply(10, 32)}`

// So when this line runs, it will call the sum function, adding 10 and 32.

// The sum function will not print out 42. So when you call sum(10, 32), the function executes return; which 

// exits the function immediately without returning any value.

// Hence, since the function doesn't return anything explicitly, the returned value is undefined.

// Here is a correct code.
//function sum(a, b) {
//   return a + b;
// }

function sum(a, b) {
  return;
a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
