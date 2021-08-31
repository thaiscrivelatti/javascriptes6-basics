/**
 * Para mais detalhes, ler sobre hoisting.
 * Qualquer variavel que nao tiver um valor atribuido é undefined.
 * Qualquer variavel que nao foi declarada ainda, sofre um "hoisting" e se torna undefined.
 * 
 */
const undefinedVariable = undefined;
console.log("Tipo da variavel eh: ", typeof undefinedVariable);

var noValueVariable;
console.log("Tipo dessa variavel sem valor eh: ", typeof noValueVariable);

console.log("Tipo dessa variavel que nao declarei eh: ", typeof notDeclaredVariable);