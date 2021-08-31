/**
 * Manipulacao de strings com exemplos.
 */
const texto = 'Wingardium Leviosa';
console.log(texto);

// length - Tamanho da string
console.log("Tamanho do texot:", texto.length); 

// split() - Retorna um array quebrando a string por um delimitador
console.log("Array com as posicoes separadas pelo delimitador: ", texto.split('i')); //["W", "ngard", "um Lev", "osa"]

// replace(string1, string2) - Busca um valor e substitui por outro
console.log("Substituindo: ", texto.replace("o", "ooooooo")); 

// slice() - retorna a "fatia" de um valor - passa como parametro o inicio e o final
console.log("Ultimo char da string: ", texto.slice(-1));
console.log("Sem o ultimo char da string: ", texto.slice(0,-1));
console.log("String a partir da segunda letra: ", texto.slice(1));

// substr() - retorna n caracteres a partir de uma posicao 
// passa como parametro a posicao inicial e a quantidade de caracteres
console.log("As duas primeiras letras sao: ", texto.substr(0,2));