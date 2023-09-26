const twelveHourClockTime = "08:53 PM";
const twentyFourHourClockTime = "20:53";
/*
The issue in your code is related to the variable name 12HourClockTime. 
In JavaScript (and most programming languages), variable names cannot start with a numeric digit, 
such as 12. Variable names should start with a letter (a-z or A-Z), an underscore _, or a 
dollar sign $.
also the clock format numbers was not in the correct variable presenter
*/
// solutions
/*
- changed the numbers '12' & '24' to a written numbers in the variables 
- replaced '12' with "08:53 PM" for the 12-hour clock format.
  In this clock format, the hours should range from 1 to 12, and you should also specify whether it's AM or PM.
  and since the 24 clock says "20:53" so this must be a PM hour
- replaced '24' with "20:53" for the 24-hour clock format, representing typical 24-hour clock form. 
*/

