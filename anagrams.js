function reducer(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split("").reduce((reducer, current) => {
        reducer[current] = reducer[current] + 1 || 1
        return reducer
    }, {})
}

function anagrams(str, str1) {
    let obj = reducer(str)
    let obj1 = reducer(str1)
    if (Object.keys(obj).length == Object.keys(obj1).length) {
        for (let item in obj) {
            if (obj[item] != obj1[item]) {
                return false;
            }
        }
        return true;
    }

    return false;
}

function shortAnagram(str, str1) {

    let s = str.replace(/[^\w]/g, '').toLowerCase().split("").sort().join()
    let s1 = str1.replace(/[^\w]/g, '').toLowerCase().split("").sort().join();

    return s === s1

}

console.log(shortAnagram('rail saferrty', 'fairrry taleS!'))