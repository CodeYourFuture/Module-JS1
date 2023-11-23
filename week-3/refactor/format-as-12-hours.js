// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:
// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable

function formatAs12HourClock(time) {
    const hours = Number(time.slice(0, 2));
    const minutes = time.slice(3);

    // Store the expression in a variable for better readability
    const formattedHours = hours % 12 || 12;
    const period = hours >= 12 ? "pm" : "am";

    return `${formattedHours}:${minutes} ${period}`;
}


  //By storing the result of Number(time.slice(0, 2)) in the hours variable,
   //we avoid recalculating it multiple times within the function.
   //This not only improves readability but also enhances performance by eliminating redundant computations.
   //Storing the result in a variable makes the code cleaner, more concise, and easier to maintain.





