/**
 * No exemplo, a funcao é chamada antes da declaracao.
 * No hoisting de funcao, ela é "içada" por um todo.
 * Ou seja, mesmo que ela seja chamada antes de sua declaracao, o resultado sera mostrado.
 */
function fn(){
    log('Hoisting de funcao');

    function log(value){
        console.log(value);
    }
}

fn();

/**
function fn(){
    function log(value){
        console.log(value);
    }
    log('Hoisting de funcao');
}
*/