function calculate(str) {
  //your code here...
  str = `+${str}`;
  str = str.replaceAll("plus", "+");
  str = str.replaceAll("minus", "-");
  let num;
  while (str.length > 0) {
    let lastMinus = str.lastIndexOf("-");
    let lastPlus = str.lastIndexOf("+");

    if (lastPlus > lastMinus) {
      num += Number(str.slice(lastPlus + 1));
      str = str.slice(0, lastPlus);
    } else if (lastMinus > lastPlus) {
      num -= Number(str.slice(lastMinus + 1));
      str = str.slice(0, lastMinus);
    } else {
      break;
    }
  }

  return num.toString();
}
console.log(calculate("1plus2plus3plus4"));
