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
//............................................
//Answer

function repeat(str, count) {
    if (count < 0) {
      throw new Error('Negative count is not valid');
    }
  
    if (count === 0) {
      return '';
    }
  
    return str.repeat(count);
  }
  
  module.exports = repeat;


  test('repeat String: repeats the string count times', () => {
    const result = repeat('abc', 3);
    expect(result).toBe('abcabcabc');
  });
  
  test('handle Count of 1: returns the original string without repetition', () => {
    const result = repeat('xyz', 1);
    expect(result).toBe('xyz');
  });
  
  test('Handle Count of 0: returns an empty string', () => {
    const result = repeat('123', 0);
    expect(result).toBe('');
  });
  
  test('Negative Count: throws an error for negative count', () => {
    expect(() => repeat('hello', -2)).toThrow('Negative count is not valid');
  });