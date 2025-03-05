const smallestWord= (str) => {
    
    const strArr = str.trim().split(" ")
    
    let smallestWord = strArr[0]
    for (i = 1; i < strArr.length; i++){
        if (strArr[i].length < smallestWord.length) {
            smallestWord = strArr[i]
            console.log(smallestWord)
        }
    }
    return smallestWord
}
console.log(smallestWord("Pronome neutro maca uva oi i, kokos, ksjsi ka"))
