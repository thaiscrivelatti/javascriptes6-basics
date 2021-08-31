const myNumber = 12.4032;

// toString() - Número para string
const myNumberToString = myNumber.toString();
console.log("Numero em string: ", typeof myNumberToString);

// toFixed() - Delimitar quantidade de digitos nas casas decimais
console.log("Numero com duas casas decimais: ", myNumber.toFixed(2));

// parseFloat() - string em float
console.log("String para float: ", parseFloat("21.06"));

// parseInt() - string em int
console.log("String para int: ", parseInt("27.03"));

/**
 * Apesar de existir o parseFloat() e o parseInt(), o tipo da variavel sera sempre number
 */