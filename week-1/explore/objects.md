## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

//////////////////////////////////////////////////////////////
What output do you get?
`log() { [native code] } ` , this is the output.
Native code is binary data compiled to run on a processor, such as an Intel x86-class processor. The code is written in all 1s and 0s that must conform to the processor's instruction set architecture (ISA). Native code provides instructions to the processor that describe what tasks to carry out.[no idea what this means ].

///////////////////////////////////////////////////////
Now enter just `console` in the Console, what output do you get back?
`console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}` this is the out put if we enter just console ,
`debug` , `error` , and ... are console object methods . for example we use `console.log()` to log out general messages .
//////////////////////////////////////////////////////////

Try also entering `typeof console`:
it's a JS object.

Answer the following questions:

What does `console` store?
it doesn't store anything but display the paratmete it is passed to.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
by using dot , we can have access to a class or object method . for example `console.log()` is an object and `console.log()`
let us to log a general message on console . `console.assert(condition, message);` if the condition is false it print out the message .
