const { default: expect } = require('expect');
const {rotateCharacter}=require('./rotate-char');

test(
    'rotate for (a,1) will be `b`',()=>{
        expect(rotateCharacter('ab',3)).toBe('de')
    }
    
);

test(
    'rotate for `Az1@` will be `Ba1@`' ,()=>{
        expect(rotateCharacter('Az1@',1)).toBe('Ba1@')
    }
);


