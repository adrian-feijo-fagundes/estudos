// usado como argumento transforma uma "lista" em um array

function sum(first, second, ...rest) {
    let sum = first + second 
    if (rest.length > 0) {
        for (let i = 0; i < rest.length; i++) {
            sum += rest[i]
        }
    }
    console.log(sum || 'sao necessários dois numeros para fazer uma soma')
}
sum(1,2,3,4,56,7,8,8,9,98)
sum(1,2,3,4)
sum(1)