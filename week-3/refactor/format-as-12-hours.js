// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:
// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable

function formatAs12Hours(time) {
    // Extract the hours from the time string
    const hours = Number(time.slice(0, 2));
   
    // Check if the time is in the afternoon
    if (hours >= 12) {
       // If the time is in the afternoon, subtract 12 from the hours
       // to convert it to the 12-hour format
       return `${hours - 12}:${time.slice(2)} PM`;
    } else {
       // If the time is in the morning, simply append 'AM' to the hours
       // to convert it to the 12-hour format
       return `${hours}:${time.slice(2)} AM`;
    }
   }