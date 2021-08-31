/**
 * Exemplo de função normal.
 * Soma a + b
 * Chama a função em todas as somas.
 */

function soma(a, b){
    return a+b;
}

soma(2,2);
soma(2,3);
soma(2,4);
soma(2,5);

/**
 * Caso eu nao queira repetir o primeiro parametro sempre, como no exemplo acima
 * Eu uso a tecnica currying
 * Para cada parametro, uma nova funcao eh criada.
 */
function soma(a){
    return function(b){
        return a+b;
    }
}

const soma2 = soma(2);
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
