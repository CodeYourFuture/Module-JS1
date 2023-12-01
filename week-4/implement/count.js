

function countChar(str, char ){
if (/[A-Z]/.test(str)) {
        return 0;
    }else if (str.repeat(char) !== '') {
        return str.repeat(char);
    }
}
console.log(countChar('Bgft', 3)) 

module.exports = countChar;

