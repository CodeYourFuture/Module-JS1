## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
the output is log() {[native code]}

Now enter just `console` in the Console, what output do you get back?
the output I got back is :
assert
:
ƒ assert()
clear
:
ƒ clear()
context
:
ƒ context()
count
:
ƒ count()
countReset
:
ƒ countReset()
createTask
:
ƒ createTask()
debug
:
ƒ debug()
dir
:
ƒ dir()
dirxml
:
ƒ dirxml()
error
:
ƒ error()
group
:
ƒ group()
groupCollapsed
:
ƒ groupCollapsed()
groupEnd
:
ƒ groupEnd()
info
:
ƒ info()
log
:
ƒ log()
memory
:
MemoryInfo {totalJSHeapSize: 18467169, usedJSHeapSize: 17884049, jsHeapSizeLimit: 2172649472}
profile
:
ƒ profile()
profileEnd
:
ƒ profileEnd()
table
:
ƒ table()
time
:
ƒ time()
timeEnd
:
ƒ timeEnd()
timeLog
:
ƒ timeLog()
timeStamp
:
ƒ timeStamp()
trace
:
ƒ trace()
warn
:
ƒ warn()
Symbol(Symbol.toStringTag)
:
"console"
[[Prototype]]
:
Object

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
console is an object that provides methods for interacting with the developer, console in a web browser or a Node.js environment. it dose not store data data, but rather allows developers to log information, debug code, and view code output.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

console.log : it is primary purpose is for logging messages and data to the developer console.

console.assert: Its purpose is to assert or check if a condition is 'true' if the condition is 'false' it loges an error message to the console.

the dot '.' : is like an arrow that helps to access things inside other things.

for example: imagine a box, inside that box, there is items , The '.' is like reaching into the box and picking out one of those items.
so think of dot '.' as a way to reach into objects and access their properties or methods.
