## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter  
 ƒ log() { [native code] }

What output do you get?

Now enter just `console` in the Console, what output do you get back?

console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

typeof console
'object'

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean?
In JavaScript, the console is like a toolbox for developers.
It helps them see messages, warnings, and errors while building and fixing things on a website.
It's a way to peek behind the scenes and understand what's happening in their code.

console.log is like a sticky note to jot down messages for themselves,
and console.assert is a tool to shout out if something isn't right.

both console.log and console.assert provide ways to output information to the console, but they serve different purposes.
console.log is for general logging and debugging,
while console.assert is used to check conditions and log an error if the condition is not met.

examples
let myAge = 17;
console.log("I am :", myAge);

let myAge = 17;
console.assert(myAge >= 18, "Eligible");

In particular, what does the `.` mean?

The . (dot) in JavaScript is called the dot notation and is used to access properties and methods of objects.
