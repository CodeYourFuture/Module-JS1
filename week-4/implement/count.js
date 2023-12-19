

function countChar(str, char ){
const countObj = {};
str.split('').forEach(s => {
    countObj[s] = (countObj[s] || 0) + 1;
});

if(!countObj.hasOwnProperty(char)){
    return 0;
}
    return countObj[char];
}


const listOfItems = countChar("aaabbee", 'a');
console.log(listOfItems);

module.exports = countChar;



// if (/[A-Z]/.test(str)) {
//     return 0;
// }else if (str.repeat(char) !== '') {
//     return str.repeat(char);
// }