Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

alert() function displays a popup dialog with a message to the user, temporarily halting code execution until the user acknowledges the message by clicking 'OK'

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
it opens a modal dialog box in web browser, with an input field and message provided as an argument to the function.

What is the return value of `prompt`?
The return value of 'prompt' was my name , since I wrote my name in 'prompt' input.
