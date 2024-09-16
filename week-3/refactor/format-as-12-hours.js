// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:
// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable

function formatAs12Hours(time) {
    const hours24 = Number(time.slice(0, 2));

    if (hours24 < 0 || hours24 > 23) {
        return "Invalid hours in time string";   // check vaild in 24hours fromat 
    } else if (hours24 === 0) {
        return "midnight";
    } else {
        const hours12 = hours24 % 12;
        const period = hours24 < 12 ? "AM" : "PM";
        return `${hours12 === 0 ? 12 : hours12}:${time.slice(3)} ${period}`;
    }
}

console.log(formatAs12Hours("08:30"));  // Example usage
