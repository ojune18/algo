function print_stars(num) {
    if (num % 2 == 0) {
        return null;
    }
    let i = 1;
    let space = parseInt(num / 2);
    while (i < num) {
        console.log(`${" ".repeat(space)}${"*".repeat(i)}${" ".repeat(space)}`);
        i += 2
        space -= 1
    }
    while (i > 0) {
        console.log(`${" ".repeat(space)}${"*".repeat(i)}${" ".repeat(space)}`);
        i -= 2;
        space += 1;
    }
}

try {
    print_stars(parseInt(process.argv[2]))
}
catch (err) {
    console.error(err);
}