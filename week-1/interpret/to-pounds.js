const penceString = "0001p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
//console.log(penceStringWithoutTrailingP);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//console.log(paddedPenceNumberString);

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);


//console.log(pounds);

 const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

// const pence = paddedPenceNumberString
  // .substring(paddedPenceNumberString.length - 2);

//console.log(pence);


console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// 2. line 2 to 6 initialize a another variable which aims to remove the p in our string ,399p , 
// it does this by using a method which called `substring()` , it satrts from index 0 to the last index , var.length-1 , which 
// is an exclusion in substring method , so it returns '399p' => '399'

//3. in line 9 another variable is declared `paddedPenceNumberString` , by using `padStart()` method we make sure that the price
// has 3 minimum digits , and if it doesn't have 3 digit padstart adds 0 to the start , 
// for instance if we had , `9p` the code procedure would be '9p'=>'9' =>'009' .

//4. in line 12 `pounds` variable is initialized and it attempts to take out pounds part of the price .
// we do it bu using substring() method that remove last two character(digit) in the price .
// if price is '2345p' pounds would be '2345p'=>'2345'=> '23' . obviously it takes out pounds part from paddedPenceNumberString.

//5.line 18 declares `pence` variable , now it's pence part to be taken out of paddedpenceNumberstring , 
//for this the code first take out last two character(digit) and then by using padEnd it makes sure pence part will be two digit by adding
// 0 to pence's end . [I think this part of code is unnecessary and it works withoud `padEnd()` as we already made it 3 digit in paddedPenceStringNumber].


//6. finally in line 30 , `console.log(`£${pounds}.${pence}`);` we log out the price in demanded format by using template literals .
//we add £ sign to the begin and then ${pounds} put the `pounds` variable intop our output log , a dot (.) and after that another 
//template literal to log out `pence` variable we already calculated after the dot .