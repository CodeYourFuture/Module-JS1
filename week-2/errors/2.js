
// Predict and explain first...
// Ans. Parameter for the function is fixed at a specific number
// this function should square any number but instead we're going to get an error
// what is happening? How can we fix it?
// Ans. Function parameter was fixed, rather it should be defined by global frame 

function square(num) {
    return num * num;
}

console.log(square(3));
