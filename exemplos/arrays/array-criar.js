// Criar um array

const arr = [1,2,3];
const arr2 = new Array(4,5,6); // instanciado
const arr3 = Array.of(7,8,9);

console.log("Array 1: ", arr);
console.log("Array 2: ", arr2);
console.log("Array 3: ", arr3);

/**
 * Funcao Array
 * Se passar um unico parametro inteiro, ele cria o numero de posicoes vazias
 * Se passar mais de um parametro, ele cria um array com os valores
 */
const arr4 = Array(3); // Array com 3 posicoes vazias
const arr5 = Array(3,2,1); // Array [3,2,1]

console.log("Array 4: ", arr4);
console.log("Array 5: ", arr5);

/**
 * Array.from
 * Espera um parametro array-like ou iterable object (map)
 * O exemplo abaixo nao vai funcionar no console, pois nao tem um documento html referenciado
 */
const divs = document.querySelectorAll('div'); // isso nao retorna um array, mas um node list
const arrDiv = Array.from(divs);    