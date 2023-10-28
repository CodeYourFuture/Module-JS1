// Implement a function repeatString

const { default: expect } = require("expect");
//const { test } = require("picomatch");

// Given a target string str and a positive integer count,
// When the repeatString function is called with these inputs,
// Then it should:

// case: repeatString String:
// Given a target string str and a positive integer count,
// When the repeatString function is called with these inputs,
// Then it should repeatString the str count times and return a new string containing the repeatStringed str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeatString function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeatString function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeatString function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.

function repeatString(str,number){
    if(typeof number==='number' && number>=0 && typeof str==='string'){
        let repeated='';
        for(let i=0;i<number;i++){
            repeated+=str;
        }
        return repeated;

    }

    else 
    return new Error('Enter a valid value , [a non-negative integer number]');
}

console.log(repeatString('a',0));
console.log(repeatString('b',1));
console.log(repeatString('c',3));
console.log( repeatString('CYF',5));



// this code can be done in two ways the function below uses `string.repeat()` method to repeat a string, eaier way;

function repeatString2(str2,num2){
    if(typeof num2==='number' && num2>=0 && typeof str2==='string'){
        return str2.repeat(num2);
    }
    else {
        return new Error('enter a non-negative integer number [0,) ')
    }
}

console.log(repeatString2('z',0));
console.log(repeatString2('z',1));
console.log(repeatString2('z',2));
console.log(repeatString2('WM5',5));


test('Output for repeating "WM5" 5 times should be "WM5WM5WM5WM5WM5"', () => {
  expect(repeatString2('WM5', 5)).toBe('WM5WM5WM5WM5WM5');
});

test('Output for repeating "WM5" 0 times should be empty', () => {
  expect(repeatString2('WM5', 0)).toBe('');
});

test('Output for repeating "WM5" -1 times should throw an error', () => {
  expect(repeatString2('WM5', -1)).toBeInstanceOf(Error);
});

