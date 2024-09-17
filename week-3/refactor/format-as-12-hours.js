// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:
// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable
//........................................


//Answer
function convertTo12HourFormat(time) {
    // first we need to get  the number of hours from the time
    const hours = Number(time.slice(0, 2));
  
    // If it's after noon (more than 12 o'clock), we will adjust the time format
    if (hours > 12) {
      return `${hours - 12}:00 PM`;
    }
  
    // If it's before noon, we will keep the time format as it is
    return `${time} AM`;
  }

  //Examples:
  
//   // Example 1: Converting "08:00" to 12-hour format
  const time1 = convertTo12HourFormat("08:00");
  const expectedTime1 = "08:00 AM";
  console.assert(
    time1 === expectedTime1);
  
  // Example 2: Converting "23:00" to 12-hour format
  const time2 = convertTo12HourFormat("23:00");
  const expectedTime2 = "11:00 PM";
  console.assert(
    time2 === expectedTime2);
  
