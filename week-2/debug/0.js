// Predict and explain first...
//Ans: The code defines a function called multiply that takes two parameters a and b.

//Inside the function, it simply prints out the result of multiplying a and b using console.log(a * b).

// After defining the function, the code calls the multiply function, passing 10 and 32 as the arguments.

// The results of the function call are inserted into a template literal `The result of multiplying 10 and 32 is ${multiply(10, 32)}`

// So when this line runs, it will call the multiply function, multiplying 10 and 32.

// The multiply function will print out 320.

// Then that 320 result gets inserted into the template literal, which prints out the full string:

// "The result of multiplying 10 and 32 is 320"

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
