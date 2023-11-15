
// Predict and explain first...
//ans;I think we will get referenceError because we need not define 3.

// this function should square any number but instead we're going to get an error
// what is happening? How can we fix it?
//Ans: We need num as a parameter to allow any value to call. Latter we need to log 3 as an argument to call square.
//as a result the square function will return num * num, which is 9. 

function square(num) {
    return num * num;
}

console.log(square(3));



