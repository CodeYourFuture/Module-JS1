
// Predict and explain first...
// this function should square any number but instead we're going to get an error
// what is happening? How can we fix it?

//function square(3) {
//    return num * num;
//}

// num is not defined. we must define num as a parameter instead of number '3'.
// we can pass number '3' as an argument when we call the function.
// Below is the new code:

function square(num) {
    return num * num;
}
console.log(square(3));

