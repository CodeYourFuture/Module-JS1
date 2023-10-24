const rotateCharacter = require ("./rotate-char");

test ("shifting char by rotations", function (){
    const currentOutput = rotateCharacter("A", 3);
    const targetOutput = "D";

    expect (currentOutput).toBe(targetOutput);
});