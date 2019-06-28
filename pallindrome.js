const { reverseString } = require('./reverse-string')
function pallindrome(str) {
    return str == reverseString(str)
}

// Add tester

str = process.argv[2]

console.log(str ? pallindrome(str) : 'Requires a valid string');

exports.pallindrome = pallindrome;