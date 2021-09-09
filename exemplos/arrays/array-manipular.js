/**
 * Inserir e remover elementos no FINAL do array
 * push - adiciona um ou mais elementos no final do array e retorna o tamanho do novo array
 * pop - remove o ultimo elemento e retorna o elemento
 */

// push
const fruits = ['apple', 'watermelon'];
const fruitsLenght = fruits.push('lemon'); // retorna tamanho atual

console.log(fruitsLenght); // tamanho do array
console.log(fruits); // exibe o array completo

// pop 
const fruitRemoved = fruits.pop(); // retorna 'lemon'
console.log(fruitRemoved);  


/**
 * Inserir e remover elementos no INICIO do array
 * unshift - adiciona item no inicio e retorna o tamanho do array
 * shift - remove no inicio e retorna o elemento removido
 */

// unshift 
const colors = ['red', 'blue'];
const colorsLenght = colors.unshift("yellow");

console.log(colorsLenght); // tamanho array
console.log(colors);    

// shift
const colorRemoved = colors.shift(); // item removido
console.log(colorRemoved); 

/**
 * concat
 * Concatena um ou mais arrays, retornando um novo array
 */

const concatArray = fruits.concat(colors); // concatena array de frutas com o array de cores
console.log(concatArray);

/**
 * slice
 * Retorna um novo array, "fatiando" o array de acordo com parametro de inicio e fim
 */
const numbers = [1,2,3,4,5];
console.log(numbers.slice(0,2)); // [1,2] inicia no indice 0 e retorna o que tem antes do indice 2
console.log(numbers.slice(2)); // [3,4,5] retorna a partir da posicao 2 (incluindo ela) 
console.log(numbers.slice(-1)); // [5] pega o ultimo elemento    
console.log(numbers.slice(-3)); // [3,4,5] pega os tres ultimos elementos

/**
 * splice
 * Altera um array adicionando novos elementos enquanto remove antigos
 * O array original eh alterado
 */
numbers.splice(2); // [3,4,5] os elementos serao removidos a partir da posicao 2
console.log(numbers); // [1,2] resultado final do array

/**
 * Significado os parametros do exemplo abaixo
 * Primeiro parametro: 0 - indice a partir da onde vou mexer no array)
 * Segundo parametro:  0 - quantos itens serao removidos
 * Terceiro parametro: 'first' - elemento que vou adicionar
 */
numbers.splice(0,0,'first');
console.log(numbers); // ['first', 1, 2]

// Mais um exemplo:
const food = ['rice','beans','pasta','meat'];
food.splice(2, 0, 'cake'); // Na posicao 2, nenhum item sera removido, e sera adicionado 'cake'
console.log(food); // ['rice', 'beans', 'cake', 'pasta', 'meat']

food.splice(3,2,'chicken'); // Na posicao 3, dois itens serao removidos, e adicionado 'chicken' 
console.log(food); //['rice', 'beans','cake','chicken']