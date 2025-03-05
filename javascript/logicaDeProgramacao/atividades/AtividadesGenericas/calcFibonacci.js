


function calcFibonacci(a) {
    let n1 = 0
    let n2 = 1
    for (let i = 1; i <= a; i++) {
        let res = n1 + n2
        console.log(`o ${i}º número da sequencia é ${res}`)
        n1 = n2
        n2 = res
    }
}