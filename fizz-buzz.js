function printFizzBuzz() {

    for (let i = 1; i < 100; i++) {
        let str = i % 3 == 0 ? 'Fizz' : '';
        str += i % 5 == 0 ? 'Buzz' : '';
        str = str ? str : `${i}`;
        console.log(str,"\t")
        str = null

    }
}

printFizzBuzz()