// There is an implementation of format-as-12-hours.js in the debug directory
// This implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable

// By storing the result of the expression in a variable, you avoid redundancy. 
// Storing the value in a variable ensures that the calculation is done only once.
// It provides a clear and meaningful name for the value you're working with, making the code easier to understand for anyone reading it, including yourself and other developers.
