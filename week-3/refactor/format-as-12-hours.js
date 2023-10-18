// There is an implementation of format-as-12-hours.js in the debug directory
// This implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable

function formatAs12HourClockCorrectedVersion(time) {
  const currentHour = Number(time.slice(0, 2));
  if (currentHour > 12) {
    return `${(currentHour - 12).toString().padStart(2,'0')}:${time.slice(3,5)} pm`;
  }
  else if(currentHour==12){
    return `${time.toString()} pm`
  }
  else if(currentHour==0){
    return `${'12'}:${time.slice(time.indexOf(':')+1)} am` // if time is 12 in the midnight '0' it simpley return 12 and then take out minutes + am
  }
  else{
  return `
  ${time.slice(0,time.indexOf(':')).padStart(2,'0')} 
  :${time.slice(time.indexOf(':')+1)} am`; // this snipet of code take out minute part by using slice method after the indexOf ':' to the end
  }
}
