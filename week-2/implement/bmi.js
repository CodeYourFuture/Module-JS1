// Below are the steps for how BMI is calculated

// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m) squared.

// For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 feet 8 inches) tall, you work out your BMI by:

// squaring your height: 1.73 x 1.73 = 2.99
// dividing 70 by 2.99 = 23.41
// Your result will be displayed to 1 decimal place, for example 23.4.

// You will need to implement a function that calculates the BMI of someone based off their weight and height

// Given someone's weight in kg and height in metres
// Then when we call this function with the weight and height
// It should return their Body Mass Index to 1 decimal place
function calculateBMI(weightKg, heightMeters) {
  const weightStone = Math.floor(weightKg * 0.1575); // Convert kg to stone
  const heightFeet = Math.floor(heightMeters * 3.28084); // Convert meters to feet
  const remainingInches = Math.round(
    (heightMeters * 3.28084 - heightFeet) * 12
  ); // Calculate remaining inches
  const bmi = (weightKg / (heightMeters * heightMeters)).toFixed(1);

  return {
    weightKg,
    weightStone,
    heightMeters,
    heightFeet,
    heightInches: remainingInches,
    bmi,
  };
}

const result = calculateBMI(70, 1.73);

console.log(
  `Weight: ${result.weightKg} kg (Approximately ${result.weightStone} stones)`
);
console.log(
  `Height: ${result.heightMeters} meters (Approximately ${result.heightFeet} feet and ${result.heightInches} inches)`
);
console.log(`Your Body Mass Index (BMI) result: ${result.bmi}`);
