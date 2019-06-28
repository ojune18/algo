function arrayChunks(arr, chunk) {

    let chunkedArr = []
    let n = Math.floor(arr.length / chunk)
    n += arr.length % chunk != 0 ? 1 : 0
    let i = 0;
    while(n>0){
        chunkedArr.push(arr.slice(i,i+chunk))
        i = i+chunk
        n--;
    }
        console.log(chunkedArr)
}

arrayChunks([1, 2, 3, 4, 5, 6], 5)