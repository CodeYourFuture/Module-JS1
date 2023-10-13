// In week-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


function toPounds(kilograms) {
    // A constante de conversão de quilogramas para libras
    const poundsPerKilogram = 2.20462;
  
    // Calcula o valor em libras
    const pounds = kilograms * poundsPerKilogram;
  
    return pounds;
  }
  
 
  const weightInKilograms = 70; // Peso em quilogramas
  const weightInPounds = toPounds(weightInKilograms);
  
  console.log(`O peso em libras é: ${weightInPounds}`);