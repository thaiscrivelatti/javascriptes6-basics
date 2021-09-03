/*-- Unarios --*/

// Deletar algo
delete something;

// Determinar tipo
typeof something;


/*-- Binarios --*/

/* Usa-se o in com listas
 * something in somethingItens;
 */

// Arrays
var flowers = new Array("rose", "lily", "lotus", "sunflower", "daisy");
console.log(0 in flowers);          // retorna true
console.log(3 in flowers);          // retorna true
console.log(6 in flowers);          // retorna false
console.log("lotus" in flowers)     // retorna false pois deve ser passado o indice e nao o valor
console.log("length" in flowers)    // retorna true pois length eh uma propriedade de array

// Objetos predefinidos
console.log("PI" in Math);          // retorna true
var myString = new String("marygold");
console.log("length" in myString);   // retorna true

// Objetos personalizados 
var myCar = {brand: "Renault", model: "Kwid", year: "2018"};
console.log("brand" in myCar);  // retorna true

/**
 * instanceof
 * objeto instanceof tipoObjeto
 */

var dia = new Date(1993,06,21);
if (dia instanceof Date){

}