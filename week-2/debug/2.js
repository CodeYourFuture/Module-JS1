// Predict and explain first...

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// because the `getLastDigit` function doesn't take any paratmetrs and only does some operation on the
// `num` variable which is constant and has been defined in the first line .` const num=103`
// so doesn't matter what the `getLastdigit` function is given it just return last digit of `num` which is 103.
//actually for this problem there's no need to use a function but if we aims to use function it could be corrected as below.

function getLastDigitCorrectedVersion(num2){
  return num2.toString().slice(-1) ;

}
console.log("logged message below are printed by `getLastDigitCorrectedVersion` function defined by Behrouz 🤓 😎😁" )
console.log(`The last digit of 42 by using "getLastDigitCorrectedVersion" is ${getLastDigitCorrectedVersion(42)}`);
console.log(`The last digit of 105 by using "getLastDigitCorrectedVersion" is ${getLastDigitCorrectedVersion(105)}`);
console.log(`The last digit of 806 by using "getLastDigitCorrectedVersion" is ${getLastDigitCorrectedVersion(806)}`);