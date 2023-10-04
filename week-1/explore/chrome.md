Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

//Calling the alert function in JavaScript displays a pop-up dialog box with a specified message, interrupting the normal code execution until the user clicks the "OK" button.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?

//
Calling the prompt function in JavaScript displays a pop-up dialog box with an input field, allowing the user to enter text, and returns the entered value as a string when the user submits it.

What is the return value of `prompt`?


The return value of the prompt function in JavaScript is the text entered by the user in the input field, and it is typically a string.