

// inserindo array na primeira posição

function insertFirstPosition(arr, value) {
    for (let i = arr.length;i >= 0 ; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = value
}
console.log(numbers)
InsertFirstPosition(numbers, 11)
console.log(numbers)

numbers.unshift(111)
console.log(numbers)
