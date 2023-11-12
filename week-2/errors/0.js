// Predict and explain first...
// write down the error you predict will be raised
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong

// function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
 // return str;
//}

        // The Parameter "str" declared in more than one place inside the function capitalise. to solve this issue, We can write the statement in line 7 without "let".
        // Without changing the code as mentioned above, calling function will not work. But after changing the code if we called the function and passed our string argument the function will work properly.
        // our new code will be as below:
        function capitalise(str) {
          str = `${str[0].toUpperCase()}${str.slice(1)}`;
          return str;
        }
        console.log(capitalise("haythem"));


