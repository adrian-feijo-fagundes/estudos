function calcFibonacci(a)  {
    const fibonacci = []
    fibonacci[1] = 1
    fibonacci[2] = 1
    for (let i = 3; i < a;i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
    for (let i = 1; i < fibonacci.length; i++) {
        console.log(fibonacci[i])
    }
}

calcFibonacci(20)