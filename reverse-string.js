function reverseString(str) {

    strArr = str.split("")
    i = 0
    j = strArr.length - 1
    // strArr = reverse(strArr, i, j)
    //return strArr.join("")

    return strArr.reduce((reduced, current) => current + reduced, '')
}

function reverse(strArr, i, j) {
    if (i > j) {
        return strArr
    }
    t = strArr[i]
    strArr[i] = strArr[j]
    strArr[j] = t
    i++;
    j--;
    return reverse(strArr, i, j)

}

// Add tester

// str = process.argv[2]

// console.log(str ? reverseString(str) : 'Requires a valid string')

exports.reverseString = reverseString;

