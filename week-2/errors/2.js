
// Predict and explain first...
// this function `square` tries to square the passed parameter , but in JS variable naming rules ,
// we're not allowed to start a variable name by numbers or just a number for naming variable .
//another problem is in the function's body `return num*num ;` , num is has not been declared .



// this function should square any number but instead we're going to get an error

//////////////////////////////////////////////////////////////////////////////////////
// function square(3) {
//     return num * num;
// }
////////////////////////////////////////////////////////////////////////////////////


function squareCorrectedVersion(num){
    return num*num;
}

console.log(squareCorrectedVersion(2));
