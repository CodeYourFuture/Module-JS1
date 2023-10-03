// In week-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  const convertedVersion = `£${pounds}.${pence}`;
  return convertedVersion;
}

const conversion1 = toPounds("399p");
const conversion2 = toPounds("50983p");
const conversion3 = toPounds("22p");
const conversion4 = toPounds("2p");

console.log(`Your conversion results are ${conversion1}`);
console.log(`Your conversion results are ${conversion2}`);
console.log(`Your conversion results are ${conversion3}`);
console.log(`Your conversion results are ${conversion4}`);
