function capitalizeString(str) {

    return str
        .split(" ")
        .map(item => item
            .slice(0, 1).
            toUpperCase() +
            item
                .slice(1))
        .join(" ")

}

function anotherSolution(str) {

    return str
        .split("")
        .map((item, index) => {
            if (index == 0) {
                return item
                    .toUpperCase()
            } else if (str[index - 1] == " ") {
                return item
                    .toUpperCase()
            }
            return item
        }).join("")

}

console.log(anotherSolution("Het, there are the Boys"));