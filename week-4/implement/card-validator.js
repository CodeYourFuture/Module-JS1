function cardValidator(num) {
  const toGetLength = num.length;
  const toGetDigit = Number(num);
  let ifNotNumber = isNaN(toGetDigit);
  console.log(toGetDigit, toGetLength, ifNotNumber);
  for (let i = 0; i < num.length - 1; i++) {
      console.log(num[i], num[i + 1]);
      if(){} 
  }
}
cardValidator("8854676576575765");
cardValidator("14567");
//cardValidator("11111111111111");

let x = 0;
  let count = 0;
  while(count < width){
    rect(x,0,10,height);
    x += 10;
    count ++;
  }