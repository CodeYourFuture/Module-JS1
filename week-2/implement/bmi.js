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
    
    let heightInMeters = height / 100; // Convert height to meters from centimeter.
    let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);    /// the formula for calculating body mass is, BMI = weight(kg)/height(m)2

    return bmi;
}

let weight = 58;
let height = 170; //Assuming height is in centimeters (5.6 feet is approximately  
console.log(calculateBMI(weight, height));


