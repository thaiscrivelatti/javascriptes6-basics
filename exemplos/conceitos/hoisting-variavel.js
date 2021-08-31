/**
 * A variavel text é undefined, até que se atribui um texto a ela
 */

function fn() {
    console.log(text);
    var text='Exemplo';
    console.log(text);
}

fn();

/**
 * Isso acontece por que a declaração da variavel é "içada" para o topo do codigo.
 * Mesmo se em código não há declaração, o javascript declara a variável por primeiro
 * Assim, a variavel passa a existir, mas sem valor definido
 * Por isso não ocorre erro ao utilizar uma variavel "nao declarada"
 */

/** Exemplo de hoisting
function fn() {
    var text;
    console.log(text);
    var text='Exemplo';
    console.log(text);
}
*/