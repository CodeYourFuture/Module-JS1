
// Predict and explain first...
// unction parameters should be specified by their names, 
// not by values or literals. So, function square(3) is not a valid function declaration.

// this function should square any number but instead we're going to get an error
//The syntax for declaring a function includes naming the parameters, and it should look like this:
function square(num) {
    return num * num;
}
//3 is not a valid parameter name



// what is happening? How can we fix it?

function square(3) {
    return num * num;
}


//Now, you can call this function with a number as an argument, and it will square that number:
console.log(square(5)); // Outputs: 25
