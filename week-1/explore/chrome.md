Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

// a pop up appears on top of the page that shows the message is given to the alert function

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
//it opens a dialog box the lets user input a vlaue to get sotred in the variable we already defined , myName .

What is the return value of `prompt`?
// it reurns undefined , but by chance i gave the variable to console.log(myname) and console returned the variable , myName , value which shows prompt sotred the value to our variable but doesn't return anything by itself .
