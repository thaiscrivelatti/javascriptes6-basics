// Declaracao de funcao classica, palavra reservada "function" e retorno explicito pelo "return"
function multiply(a,b) {
    return console.log(a*b);
}

// Funcoes anonimas, precisava atribuir a variavel
var oldsum = function(a,b) {
    return console.log(a+b);
}

/**
 * Arrow Functions =>
 * Sao funcoes anonimas, so podemos atribuir a uma variavel ou passar por um parametro
 * Pode-se omitir a palavra function. Entende-se que se trata de uma funcao por causa dos parenteses, os quais
 * podem ou nao conter parametros. O arrow indica a implementacao/retorno da funcao. Em caso de uma unica expressao
 * como retorno, pode-se omitir a palavra return. Caso contrario, eh necessario implementar a logica dentro de chaves
 */
var sum = (a,b) => a + b; // return implicito
console.log(5,5);

var maioridade = (a) => {
    if (a >= 18) {
        return 'Maior de idade';
    } else {
        return "Menor de idade";
    }
}
console.log(maioridade(15));

// Se tiver apenas um parametro, omitir parenteses
var dobro = a => a * 2;
console.log(dobro(10));

// Pode-se criar objetos literais
var obj = () => ({prop: "123"});
console.log(obj());

// Funcao construtoras NAO funcionam com arrow functions por causa do "this"
function Car() {
    this.foo = 'bar';
}
console.log(new Car()); // Car {foo: 'bar'}

var AnotherCar = () => {
    this.foo = 'bar';
}
// console.log(new AnotherCar()); // Uncaught TypeError: AnotherCar is not a constructor

// Arrow functions NAO possuem hoisting
//console.log(write('Hello world.')); // write is not a function
var write = (value) => value; 



