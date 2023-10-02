Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
Here's an example of how you would use the alert function:
alert("This is an alert message!");
When this code is executed, a pop-up dialog will appear with the message "This is an alert message!" and an "OK" button. The user must click "OK" to dismiss the alert, at which point the script will continue executing.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
the prompt function is used to display a modal dialog box with a message, an input field for the user to enter data, and OK and Cancel buttons for the user to confirm or cancel their input. When you call the prompt function, it will pause the execution of your script and display this dialog box, allowing the user to enter text.
Here's an example of how you would use the prompt function:

const myName = prompt("Please enter your name:");
console.log("Your name is: " + myName);

What is the return value of `prompt`?
The return value of the prompt function depends on the user's interaction:

If the user clicks "OK" after entering text, prompt returns the text entered by the user as a string, and is stored in the myName variable
If the user clicks "Cancel" or simply closes the dialog without entering text, prompt returns null.
