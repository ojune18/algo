function maxChars(str) {

    let strArr = str.split("")
    let obj = strArr.reduce((reduced, current) => {
        reduced[current] = reduced[current]+1 || 1
        return reduced
    }, {})
    let sorted = Object.keys(obj).sort((a, b) => {
        if (obj[b] == obj[a]) {
            return 0
        }
        return obj[a] > obj[b] ? -1 : 1
    });

    return sorted[0]



}

console.log(maxChars('avijsdfdsfdddds43332000akjj'));