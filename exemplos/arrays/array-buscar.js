/**
 * Buscar elementos
 */

/**
 * Find
 * Retorna o primeiro item de um array que satisfaz a condicao
 */
const arr = [1,2,3,4];
const firstGreaterThanTwo = arr.find(value => value>2);
console.log(firstGreaterThanTwo); // 3

/**
 * findIndex
 * Retorna o indice do primeiro item de um array que satisfaz a condicao
 */
const firstIndexGreaterThanTwo = arr.findIndex(value => value>2);
console.log(firstIndexGreaterThanTwo); // 2

/**
 * filter
 * Retorna um array com todos os elementos que satisfazem a condicao
 */
const numbersGreaterThanTwo = arr.filter(value => value>2);
console.log(numbersGreaterThanTwo); // [3,4]

/**
 * indexOf
 * Retorna o primeiro indice em que um elemento pode ser encontrado
 */
const numbers = [1,2,3,3,4,3];
const firstIndexOfItem = numbers.indexOf(3);
console.log(firstIndexOfItem); // 2

/**
 * lastIndexOf
 * Retorna o ultimo indice em que um elemento pode ser encontrado
 */
const lastIndexOfItem = numbers.lastIndexOf(3);
console.log(lastIndexOfItem); // 5

/**
 * includes
 * Retorna um booleano verificando se determinado existe no array
 */
const hasItemOne = numbers.includes(1);
const hasItemSix = numbers.includes(6);
console.log(hasItemOne); // true
console.log(hasItemSix); // false

/**
 * some
 * Retorna um booleano verificando se ao menos um item do array satisfaz a condicao
 */
const hasSomeEvenNumber = numbers.some(value => value % 2 === 0); // Verifica se possui numero par
console.log(hasSomeEvenNumber); // true

/**
 * every
 * Retorna um booleano verificando se todos os itens do array satisfazem a condicao
 */
const allEvenNumbers = numbers.every(value => value % 2 === 0);
console.log(allEvenNumbers); // false

