/**
 * Iterar elementos do array
 */


/**
 * forEach
 * Iteracao de cada item do array
 * Primeiro parametro é o valor do elemento
 * Segundo parametro é o index das posicoes 
 * Terceiro parametro é o array que ele esta lendo  (arr)
 */
const colors = ['red', 'green', 'blue'];
colors.forEach((value,index) => {
    console.log(`${index}: ${value}`);
});

// Apenas valores do array
colors.forEach(colors => console.log(colors));

// Retorna index, cor do index e o array lido
colors.forEach((color, index, arr) => console.log(index, color, arr));

/**
 * map
 * Retorna um NOVO ARRAY, de mesmo tamanho, iterando cada item do array
 * Nao mexe na referencia do array original
 */
const numbers = [1,3,5,7];
numbers.map(value => console.log(value*2)); //[2,6,10,14]
colors.map((color, index) => console.log(`${index} + ${color}`));

/**
 * flat
 * Retorna um NOVO ARRAY com todos os elementos de um sub-array concatenados de forma recursiva
 * conforme a profundidade especificada (depth)
 */
 const evenNumbers = [0,2,4,[4,8]];
 console.log(evenNumbers.flat()); // [0,2,4,4,8]
 
 const oddNumbers = [1,[1,3,[1,3,5]],3];
 console.log(oddNumbers.flat()); // [1,1,3,[1,3,5],3]
 console.log(oddNumbers.flat(2)); //  [1,1,3,1,3,5,3]

 /**
  * flatMap
  * Retorna um NOVO ARRAY e executa um flat de profundidade 1
  */
const flatArr = [1,2,3,4]
const newFlatArr = flatArr.flatMap(value => [[value*2]]); //transformando o value com 2 niveis de profundidade
console.log(newFlatArr); // o novo array tem apenas um nivel de profundidade

/**
 * keys
 * Retorna um Array Iterator que contem as chaves para cada elemento do array
*/
const chars = ['a','b','c'];
const keysIterator = chars.keys();
keysIterator.next(); //{value: 0, done: false}
keysIterator.next(); // {value: 1, done: false}
keysIterator.next(); // {value: 2, done: false}
keysIterator.next(); // {value: undefined, done: true}

/**
 * values
 * Retorna um Array Iterator que contem os valores para cada elemento do array
 */
const charsValues = chars.values();
charsValues.next(); //{value: 'a', done: false}
charsValues.next(); //{value: 'b', done: false}
charsValues.next(); //{value: 'c', done: false}
charsValues.next(); //{value: undefined, done: true}

/**
 * entries
 * Retorna um Array Iterator que contem pares chave/valor para cada elemento do array
 */
const charsEntries = chars.entries();
charsEntries.next(); //{value: [0, 'a'], done: false}
charsEntries.next(); //{value: [0, 'b'], done: false}
charsEntries.next(); //{value: [0, 'c'], done: false}
charsEntries.next(); //{value: undefined, done: true}
