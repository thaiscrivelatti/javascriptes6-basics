/**
 * Generators
 * Eh preciso colocar asterisco apos a palavra "function" para definir um generator.
 * O "yield" eh como o "return" de um generator.
 * Generators sao funcoes especiais que criam iteradores.
 * Calcula cada item por vez, ao inves de armazena-los todos em memoria. 
 * Caracteristica conhecida por lazy evaluation
 */
function* hello() {
    console.log("Hello");
    yield 1;

    console.log("Como vai você?");
    const value = yield 2;

    //console.log("Fim");
    console.log(value);
}

const genExemple = hello();
console.log(genExemple.next()); // hello
console.log(genExemple.next()); // Como vai você?
//console.log(genExemple.next()); // Fim
console.log(genExemple.next("Tchau"));

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}
const it = naturalNumbers();
console.log(it.next()); // 0
console.log(it.next()); // 1
console.log(it.next()); // 2

const obj = {
    values: [1,2,3,4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
};
for (let value of obj) {
    console.log(value);
}