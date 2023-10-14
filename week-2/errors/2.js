
// Predict and explain first...
// this function should square any number but instead we're going to get an error
// what is happening? How can we fix it?

function square(3) {
    return num * num;
}

The function square(3) is incorrect because it is trying to square the number 3, but it is not defined as a variable.

In JavaScript, when you declare a variable, you need to use the keyword "var", "let", or "const". In this case, the variable num is not defined, so when the function tries to access it, a ReferenceError will be raised.

To fix this error, we need to define the variable num as a parameter of the function square.

function square(num) {
    return num * num;
}

console.log(square(3));

