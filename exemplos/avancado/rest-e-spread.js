/**
 * Rest Operator ...
 * Retorna os parametros como um array, os quais podem ser manipulados com as funcoes de array
 * 
 * Em uma funcao normal - function() - eh possivel acessar todos os parametros passados atraves da
 * palavra reservada "arguments". Contudo, ela eh um objeto e nao um array.
 */

function sum(...rest) {
    return rest.reduce((total, value) => total + value, 0)
}
console.log(sum(5,5,5,3,2));

/** 
 * Arrow functions nao possuem a funcao "arguments", por isso o ideal eh usar o rest operator
 * No exemplo abaixo, terei os parametros a = 5, b = 5 e o restante em um array chamado rest[5,3,2]
 */
const soma = (a,b,...rest) => {
    //console.log(arguments); - nao existe
    console.log("a: ", a, " b :", b, " rest: ", rest);

}
console.log(soma(5,5,5,3,2));

/** 
 * Spread operator
 * Escreve-se igual o rest operator, com os tres pontos "...", mas possuem funcoes diferentes.
 * O spread operator pega todos os itens do array e transformam em parametros de funcao. 
 * Pode-se ser utilizado com strings, arrays, objectos literais e objetos iteraveis
 */
const numbers = [5,5,5,3,2];
const multiply = (...rest) => rest.reduce((total, value) => total * value, 1);
console.log("Multiplicando: ", multiply(...numbers));

/**
 * Usando os dois operadores ao mesmo tempo
 */
const intermedio = (...args) => { // aqui le parametros e retorna array (rest)
    return multiply(...args);     // aqui passa o array como parametros (spread)
}
console.log(intermedio(5,5,5,3,2));

/**
 * Spread operator com string
 */
const str = "Lumos";
function log(...args) {
    console.log(args); // ['L', 'u', 'm', 'o', 's']
}
log(...str);

function log2(a,b,c) {
    console.log(a,b,c);
}
log2(...str); // L u m

/**
 * Concatenando arrays
 */
const frutas = ['morango', 'melancia', 'pessego'];
const comidaFit = [...frutas, 'alface', 'ovo', 'frango'];
console.log(comidaFit);

const pares = [2,4,6];
const superArray = [...numbers, {name: 'Harry', lastname: 'Potter'}, ...comidaFit];
console.log(superArray);

/**
 * Objetos literais
 */

const obj01 = {
    name: "Harry",
    lastname: "Potter"
}
const obj02 = {
    ...obj01,
    pet: "Owl",
    petName: "Hedwig"
}
console.log(obj02);