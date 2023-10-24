const isProperFraction = require ("./is-proper-fraction");

test ("checking proper fraction", function (){
    const currentOutput = isProperFraction(1, 3);
    const targetOutput = true;

    expect (currentOutput).toBe(targetOutput);
});