## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

//console.log: function log(...arg) {}

What output do you get?

Now enter just `console` in the Console, what output do you get back?

 //console: {}

Try also entering `typeof console`

//typeof console: "object"

Answer the following questions:

What does `console` store?
//The console variable stores a reference to the console object.


What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
 
 //The syntax console.log or console.assert means that you are calling a method on the console object. The . is used to separate the object name from the method name. For example, console.log is calling the log method on the console object.