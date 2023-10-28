function creditCardValidator(digits){
  let digitArray = []; // Stores the digits in an array to ease working with the array as an object (i.e. this ensures property
  // like (.length) and indexing can be used without losing the integer property of the digits.
  let sum = 0; // this stores the total sum the digits
  let strCheck = false; // this is defined and set to false so that it can be stored as true if (and when) all digits
                //are NUMBERS and not same number all through
  const numStr = String(digits);  // converts the digits to string to ease conversion to array, named digitArray
  for (i = 0; i < numStr.length; i++) { // looping to convert the digits into items that will be used to populate the array
    digitArray.push(parseInt(numStr[i])); //Each string item is converted to Integer (using parseInt) and pushed into the array
  }
  for (i = 0; i < digitArray.length; i++) { //this selects the each digit in the array and
    sum += digitArray[i];  //sums it up to the give the sum of all the digits
    if (typeof digitArray[i] === "number" && digitArray[i] !== digitArray[0]) { //checks if each item in the digitArray is a number and not the same all through
                //digitArray[i] is compared with the first item, digitArray[0] and expected not to be the same as all through.
      strCheck = true; //if the conditions in the 'if' is valid, turn strCheck to true, (it was set to false in line 5).
    }
  }
  if (
    strCheck &&
    sum > 16 &&
    digitArray[15] % 2 === 0 &&
    digitArray.length === 16
  ) { // here, all the criteria are checked and must be all true to return true.
    return true;
  }
  return false; 
}

// test on the console
console.log(creditCardValidator("11111111111111211")); // false (last digit is odd)
console.log(creditCardValidator("9999777788880000"));// true (all conditions met)
console.log(creditCardValidator(6666666666666666)); //false (all digits are the same)
console.log(creditCardValidator(1230194419282935)); // false (final/last digit is odd)
console.log(creditCardValidator(1230194419282932)); // true (all conditions met)
console.log(creditCardValidator('123O094419282935')); // false (the fourth character is O not 0)
    
