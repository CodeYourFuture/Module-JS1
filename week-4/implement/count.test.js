// implement a function countChar that counts the number of times a character occurs in a string

const { default: expect } = require("expect");
//const { test } = require("picomatch");
//const { count } = require("yargs");

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

function charCounter(str,char){
    let occurrences=0;
    if(typeof str==='string' && typeof char==='string')
        if(str.includes(char)){
            for(let i=0;i<str.length;i++){
                if(str[i]===char){
                    occurrences=occurrences+1;
                }
            }
            return `${char} appears ${occurrences} times in ${str}`
        }
        else return `0 times ${char} apeared in ${str}` ;
    else{
        return new Error('both par should be string')
    }
}

console.log(charCounter('CYF' ,'B'));

test('i appear 2 times in hii',()=>{
    expect(charCounter('hii','i')).toBe('i appears 2 times in hii')
});

test('i appear 1 times in hi',()=>{
    expect(charCounter('hi','i')).toBe('i appears 1 times in hi')
});

test('i appear 1 times in hi',()=>{
    expect(charCounter('hi',2)).toBeInstanceOf(Error)
});


test('i appear 1 times in hi',()=>{
    expect(charCounter('CYF','B')).toBe('0 times B apeared in CYF')
});
