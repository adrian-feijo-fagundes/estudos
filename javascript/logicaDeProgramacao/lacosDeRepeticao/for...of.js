// O laço for...of percorre diretamente os valores de um array, sendo mais prático para arrays e estruturas iteráveis.


// Exemplo: Iteração sobre valores do array
const minecraftChest = [
    'redstone',
    'diamond sword',
    'golden apple',
    'wood planks',
    'bread',
    'iron pickaxe',
    'iron axe',
    'bucket'
];
console.log(`Itens in the chest:`);
for (let item of minecraftChest) {
    console.log(' ' + item);
    if (item === 'bread') break;  // Interrompe o laço ao encontrar "bread"
}