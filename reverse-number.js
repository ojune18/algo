const { reverseString } = require('./reverse-string');
function reverseNumber(num) {
    let str = reverseString(num.toString());
    return parseInt(str) * Math.sign(num);
}
console.log(reverseNumber(-788990001))