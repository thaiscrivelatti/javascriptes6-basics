/**
 * Default arguments
 * 
 * Uma solução para mitigar possíveis erros no algoritmo quando um parâmetro não é passado na função
 * No exemplo abaixo, a variavel b receberá 1 quando for undefined
 */

function multiply(a, b=1) {
    return a * b;
}

console.log("Passando todos os parametros: ", multiply(5,5));
console.log("Passando apenas primeiro parametro: ", multiply(5));
console.log("Passando parametro zero: ", multiply(5, 0));
console.log("Passando parametro undefined: ", multiply(5, undefined));

/**
 * Lazy evaluation
 * Funcoes tambem podem ser passadas como valor default de um parametro
 */

function randomNumber() {
    console.log('Generating a random number...');
    return Math.random()*10;
}

function multiplyAgain(a, b = randomNumber()) {
    return a * b;
}

console.log("Multiplicando com numero randomico: ",multiplyAgain(2));


