function steps(num) {
    let n = 1;
    while (n <= num) {
        console.log(`'${"".padStart(n,"#")}${"".padEnd(num-n)}'`)
        n++;
    }
}


steps(10)