
// Predict and explain first...
// this function should square any number but instead we're going to get an error
// what is happening? How can we fix it?

function square(3) {
    return num * num;
}

// it will give an syntax error of unexpected number because there is a number defined in the function parameter whic should instead be defined in console.log
// so we need to remove the 3 from function parameter and write console.log(square(3)); which will give us 9 