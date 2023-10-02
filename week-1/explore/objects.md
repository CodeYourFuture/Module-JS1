## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }
it would not produce any meaningful output on its own.
Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
a list of functions

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
The console object typically provides methods such as:

- console.log(): Used to log messages, objects, or other data to the console.
- console.error(): Used to log error messages to the console with a distinctive error icon.
- console.warn(): Used to log warning messages to the console with a distinctive warning icon.
- console.info(): Used to log informational messages to the console with a distinctive info icon.
- console.debug(): Used to log debugging information to the console, which may be less common and not supported in all environments.
- console.clear(): Used to clear the console of previous output.
- console.table(): Used to display data in a tabular format.
- console.group() and console.groupEnd(): Used to group related log messages in the console for better organization.
- console.time() and console.timeEnd(): Used to measure the time it takes to execute a specific block of code.
- console.count(): Used to count how many times a particular log message has been called.
  What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
  '.' (Dot Operator): The dot (.) is an operator in JavaScript used to access properties and methods of objects. When you see console.log or console.assert, you are using the dot operator to access the log and assert methods of the console object, respectively.
  console.log: This is used to log messages or data to the console.
  console.assert: This is used to assert a condition and log an error message to the console if the condition is false.
