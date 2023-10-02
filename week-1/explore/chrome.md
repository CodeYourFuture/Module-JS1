Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
it display a dialog box with "Hello world".

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

const Myname=prompt('What is your name?');
 console.log(Myname);

What effect does calling the `prompt` function have?

Display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.

What is the return value of `prompt`?
The text we added in the input field of the dialog box.
