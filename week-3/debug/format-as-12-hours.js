function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    return `${Number(time.slice(0, 2)) - 12}:00 pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  "current output: %s, target output: %s",
  currentOutput2,
  targetOutput2
);

// formatAs12HourClock currently has a 🐛

// a) Write an assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"
// b) Check the assertion output and explain what the bug is
// c) Now fix the bug and re-run all your assertions


// ANSWERS
/////////////////////////////////////////////////////////
//a):

// currentOutput3=formatAs12HourClock('17:42');
// targetOutput3='05:42 pm'
// console.assert(
//   currentOutput3===targetOutput3,
//   'currentOut3 is %s : targerOutput is %s',
//   currentOutput3,
//   targetOutput3
// );

////////////////////////////////////////////////////////////////////////////////////

//b):

// this is `console.assert` message "Assertion failed: currentOut3 is 5:00 pm : targerOutput is 05:42 pm" .
//the reason is in this peace of code 
//`return `${Number(time.slice(0, 2)) - 12}:00 pm`;`
// doesn't matter what will be the input the code put `00` instead of minute part .

//////////////////////////////////////////////////////////////////////////

//c):

function formatAs12HourClockCorrectedVersion(time) {
  const currentHour = Number(time.slice(0, 2));
  if (currentHour > 12) {
    return `${(Number(time.slice(0, 2)) - 12).toString().padStart(2,'0')}:${time.slice(3,5)} pm`;
  }
  else if(Number(time.slice(0,2))==12){
    return `${time.toString()} pm`
  }
  else if(Number(time.slice(0,2))==0){
    return `${'12'}:${time.slice(time.indexOf(':')+1)} am`
  }
  else{
  return `${time.slice(0,time.indexOf(':')).padStart(2,'0')}:${time.slice(time.indexOf(':')+1)} am`;
  }
}

currentOutput4=formatAs12HourClockCorrectedVersion('13:42');
console.log(currentOutput4);
targetOutput4='01:42 pm'
console.assert(
  currentOutput4===targetOutput4,
  'currentOut4 is %s : targerOutput4 is %s',
  currentOutput4,
  targetOutput4
);


currentOutput5=formatAs12HourClockCorrectedVersion('00:12');
targetOutput5='12:12 am';
console.assert(
  currentOutput5===targetOutput5,
  'currentOut4 is %s : targerOutput4 is %s',
  currentOutput5,
  targetOutput5
);

currentOutput6=formatAs12HourClockCorrectedVersion('12:30');
targetOutput6='12:30 pm';
console.assert(
  currentOutput6===targetOutput6,
  'currentOut4 is %s : targerOutput4 is %s',
  currentOutput6,
  targetOutput6
);

// console.log(formatAs12HourClockCorrectedVersion('17:42'));
console.log(formatAs12HourClockCorrectedVersion('1:42'));
console.log(formatAs12HourClockCorrectedVersion('13:42'));
console.log(formatAs12HourClockCorrectedVersion('12:42'));
console.log(formatAs12HourClockCorrectedVersion('00:12'));