const {isProperFraction}=require('./is-proper-fraction');


test( 'result for 3/4 should be true' , ()=>{
    expect(isProperFraction(3,4)).toBe(true);
}  

)

test( 'result for (-5)/2 should be true' , ()=>{
    expect(isProperFraction(-5,2)).toBe(false);
}  
)

test( 'result for `true`/g should be error' , ()=>{
    expect(()=>isProperFraction(true,'g')).toThrowError('Enter a valid value');
}  
)

test( 'result for `3/0 should be Error' , ()=>{
    expect(()=>isProperFraction(3,0)).toThrowError('Denominator cannot be zero');
}  
)


test( 'result for 5/2 should be true' , ()=>{
    expect(isProperFraction(5,2)).toBe(false);
}  

)