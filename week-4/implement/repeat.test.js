// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.

function repeat(str,int){
    return int >= 0 ? str.repeat(int): Error;
}

console.log(repeat("name", 0));

test ("repeat str in int times", function(){
    const currentOutput = repeat("Oyehan",3);
    const targetOutput = "OyehanOyehanOyehan";
    expect(currentOutput).toBe(targetOutput);

    // other cases
    expect(repeat("Oyehan",1)).toBe("Oyehan");
    expect(repeat("Oyehan", 0)).toBe('');
    expect(repeat("Oyehan", -1)).toBe(Error);
});