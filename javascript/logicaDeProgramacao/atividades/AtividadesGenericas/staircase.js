
function staircase(number) {
    for (let i = 1; i <= number ; i++) {
       let space = " ".repeat(number - i) + "#".repeat(i)
       console.log(space)
    }
}
staircase(6)