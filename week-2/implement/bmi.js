// Below are the steps to calculate BMI for an adult

// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m) squared.

// For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 feet 8 inches) tall, you work out your BMI by:

// squaring your height: 1.73 x 1.73 = 2.99
// dividing 70 by 2.99 = 23.41
// Your result will be displayed to 1 decimal place, for example 23.4.

// Implement a function that calculates the BMI of someone using their weight and height

// Given someone's weight in kg and height in metres
// When we call this function with the weight and height
// Then it returns their Body Mass Index to 1 decimal place

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return parseFloat(bmi.toFixed(1));
  // Round to 1 decimal place (parseFloat(bmi.toFixed(1)) takes the calculated BMI, rounds it to one decimal place as a string, and then converts it back to a floating-point number, ensuring that the BMI returned by the function has only one decimal place. This helps keep the BMI value precise to the specified decimal point.)
}
console.log(calculateBMI(70, 1.73)); // Example input: weight 70kg, height 1.73m
console.log(calculateBMI(56, 1.65));
console.log(calculateBMI(87, 1.63));
