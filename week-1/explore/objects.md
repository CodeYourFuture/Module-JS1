## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
// f log() { [native code]}

Now enter just `console` in the Console, what output do you get back?
// console {debug: f, error: f, info:f, log: f, warn: f, }

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
// console store a lot of functions such as: assert, clear, context, count, etc.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
// console.log is a method allows you to output information to the console.
// console.assert is a method writes an error message to the console if the assertion is false.
// the dot notation is how JavaScript access to the data inside an object.
