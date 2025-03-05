const phrase = 'complicado      viu isso é incrivel'


const wordsArr = (i) => {
  return i !== '';    
};

const arr = phrase.replace(',',' ').split(' ').filter(wordsArr)

console.log('\nquantidade de caracteres antes do filter:', phrase.length)
console.log('quantidade de caracteres depois do filter:', arr.join(' ').length)
console.log('\nfrase antes:\n', phrase)
console.log('frase depois:\n', arr.join(' ')) // [1, 2, 3, 4, 5]

