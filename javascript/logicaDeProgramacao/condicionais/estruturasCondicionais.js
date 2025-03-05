/*
    Estruturas Condicionais
    Estruturas que avaliam uma condição e executam determinado bloco de código se a condição for TRUE ou FALSE.
*/

// Condição Simples: IF
// Executa o bloco de código se a condição for TRUE
let num1 = 2;
let num2 = 5;
console.log('Exemplo de if:');
console.log(`${num1} é igual a ${num2}`);
if (num1 === num2) {
    console.log('A condição foi TRUE');
}

// Condição Composta: IF...ELSE
// Executa um bloco se a condição for TRUE, ou outro bloco se for FALSE
console.log('\nExemplo de if...else:');
if (num1 === num2) {
    console.log('A condição foi TRUE');
} else {
    console.log('A condição foi FALSE');
}

// Condição Aninhada e ELSE IF
// Estruturas IF/ELSE dentro de outras condições
let num3 = 6;
let num4 = 4;

console.log('\nExemplo de if...else aninhado:');
if (num1 === num2) {
    console.log('Primeiro bloco');
} else if (num1 > num2) {
    console.log('Segundo bloco');
} else {
    console.log('Terceiro bloco');
}

// Exemplo real de uso de ELSE IF com faixa etária
let idade = 67;
console.log(`\nVocê tem ${idade} anos.`);
if (idade < 16) {
    console.log('Não vota');
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional');
} else {
    console.log('Voto obrigatório');
}

/*
    Condição Múltipla: SWITCH
    Avalia uma expressão e executa o bloco correspondente ao caso que tenha o mesmo valor.
    Se nenhum caso é encontrado, executa o bloco default, se ele existir.
*/

// Exemplo de SWITCH com números
let num = 2;
console.log('\nExemplo de switch com números:');
switch (num) {
    case 1:
        console.log('Caso 1');
        break;
    case 2:
        console.log('Caso 2');
        break;
    case 3:
        console.log('Caso 3');
        break;
    case 4:
        console.log('Caso 4');
        break;
    default:
        console.log('Caso padrão (default)');
        break;
}

// Exemplo de SWITCH com strings
console.log('\nExemplo de switch com strings:');
switch ("exemplo") {
    case "exemplo1":
        console.log("Exemplo 1");
        break;
    case "exemplo2":
        console.log("Exemplo 2");
        break;
    default:
        console.log("Caso padrão (default)");
        break;
}

// Exemplo: SWITCH para retornar o dia da semana
let agora = new Date();
let diaSemana = agora.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

console.log('\nExemplo de switch para dias da semana:');
switch (diaSemana) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('ERRO: Número inválido');
        break;
}
