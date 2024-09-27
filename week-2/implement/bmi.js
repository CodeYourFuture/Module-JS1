// Below are the steps to calculate BMI for an adult

// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m) squared.

// For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 feet 8 inches) tall, you work out your BMI by:

// squaring your height: 1.73 x 1.73 = 2.99
// dividing 70 by 2.99 = 23.41
// Your result will be displayed to 1 decimal place, for example 23.4.

// Implement a function that calculates the BMI of someone using their weight and height

// Given someone's weight in kg and height in metres
<<<<<<< HEAD
// Then when we call this function with the weight and height
// It should return their Body Mass Index to 1 decimal place

function bodyMassIndex(height, weight) {
  const sum = weight / (height * height);
  const roundSum = sum.toFixed(1);
  return roundSum;
}

const test = bodyMassIndex(1.73, 70);

console.log(test);
=======
// When we call this function with the weight and height
// Then it returns their Body Mass Index to 1 decimal place
>>>>>>> 03fce56db903fb986ff36f73e4d57cebfa18707c
