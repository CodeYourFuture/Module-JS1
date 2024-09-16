Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`; alert("Hello world!"`;)

What effect does calling the `alert` function have?

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`. /_let myName = prompt("What is your name?");_/

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

// The return value of the prompt function is the text entered by the user. If the user clicks the 'OK' button after entering text, the text they entered is returned as a string. If the user clicks 'Cancel' or closes the dialog, the function returns null.
