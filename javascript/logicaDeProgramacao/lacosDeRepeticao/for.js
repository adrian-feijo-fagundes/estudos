// O laço for é utilizado quando se sabe o número de iterações que serão realizadas. Ele inclui a inicialização, a condição de parada e o incremento, todos em uma única linha.

// Exemplo 1: Contagem de 0 a 10
for (let contador = 0; contador <= 10; contador++) {
    console.log(contador);
}

// Exemplo 2: Iteração sobre um array de números
const numeros = [12, 23, 34, 45, 54, 43, 32, 47];
for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    console.log(element);
}

// Exemplo 3: Laço aninhado para construir uma matriz 3D
const matriz = [];
for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = [];
        for (let z = 0; z < 3; z++) {
            matriz[i][j][z] = i + j + z;
        }
    }
}
console.log(matriz);