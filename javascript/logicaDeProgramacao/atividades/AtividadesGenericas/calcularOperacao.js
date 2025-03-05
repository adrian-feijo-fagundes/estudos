// uma função que calcula operações aritméticas básicas

function calcularOperacao(operador, numero1, numero2) {
    let resultado;
    switch (operador) {
      case "+":
        resultado = numero1 + numero2;
        break;
      case "-":
        resultado = numero1 - numero2;
        break;
      case "*":
        resultado = numero1 * numero2;
        break;
      case "/":
        resultado = numero1 / numero2;
        break;
      default:
        resultado = "Operação inválida";
    }
    return resultado;
}
console.log(calcularOperacao("-", 10,2))