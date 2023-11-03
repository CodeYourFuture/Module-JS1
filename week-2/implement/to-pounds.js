// In week-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

/*
the normal code from week1 it has some issue if we just input the number without the letter 'p' it 
removes values from the input here is the code:

function toPounds(moneyStringInput) {
  const penceStringWithoutTrailingP = moneyStringInput.substring(0, moneyStringInput.length - 1);
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
  const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

  return `£${pounds}.${pence}`;
}

console.log(toPounds("399")); // Output: £0.39 we must add the letter 'p' in the input value
*/
// to fix that issue in the code here is a modified function that handle cases with or without the "p" character

function toPounds(moneyStringInput) {
  if (moneyStringInput.endsWith("p")) {
    const penceStringWithoutTrailingP = moneyStringInput.substring(
      0,
      moneyStringInput.length - 1
    );
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(
      3,
      "0"
    );
    const pounds = paddedPenceNumberString.substring(
      0,
      paddedPenceNumberString.length - 2
    );
    const pence = paddedPenceNumberString
      .substring(paddedPenceNumberString.length - 2)
      .padEnd(2, "0");

    return `£${pounds}.${pence}`;
  } else {
    // Handle cases without "p" (assume the input is in pence)
    const penceStringWithoutTrailingP = moneyStringInput.padStart(3, "0");
    const pounds = penceStringWithoutTrailingP.substring(
      0,
      penceStringWithoutTrailingP.length - 2
    );
    const pence = penceStringWithoutTrailingP
      .substring(penceStringWithoutTrailingP.length - 2)
      .padEnd(2, "0");

    return `£${pounds}.${pence}`;
  }
}

console.log(toPounds("399p")); //string number ends with p 
console.log(toPounds("399")); //or string number ends without p 
