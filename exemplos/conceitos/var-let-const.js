/**
 * Tres formas de armazenar um valor: var, let, const
 * 
 * var - variavel global, nao respeita escopo de bloco, apenas escopo global e de funcao.
 * let - variavel. respeita escopo de bloco
 * const - constante. respeita escopo de bloco.
 */

var nameVar = 'Anne with an E';
let nameLet = 'Anne with an E';
const nameConst = 'Anne with an E';

/**
 * Exemplo de comportamento do var em escopo. 
 */
 var test = 'example';
 (() => {
    // dentro do escopo de funcao, o var test nao existe ainda. acontece um hoisting e seu valor é undefined.
    console.log('Valor dentro da funcao: ', test); // undefined

    if(true){
        var test = 'example'; // essa variavel "sobe" com o hoisting pois o var nao respeita o escopo de bloco
        console.log('Valor dentro do if: ', test); // example
    }

    console.log('Valor apos execucao do if: ', test); // example
});


/**
 * Exemplo de comportamento do let em escopo de funcao. O const possui o mesmo comportamento abaixo.
 */
 (() => {
    let test = 'valor funcao';
    console.log('Valor dentro da funcao: ', test); // valor funcao

    if(true){
        let test = 'valor if';
        console.log('Valor dentro do if: ', test); // valor if
    }

    console.log('Valor apos execucao do if: ', test); // valor funcao
});


/**
 * Const
 */
const personagem = 'Zé Colmeia';

// Nao permite alterar o valor
//personagem = 'Zé Colmeia'; 

const user = {
    apelido: 'Zé Colmeia'
}

// Em caso de objeto, permite mudar as propriedades
user.apelido = 'Catatau';

/* Nao reatribui o objeto, pois nao pode apontar para outro lugar
user = {
    apelido: "Zé Colmeia"
}
*/

const personagens = ['Zé Colmeia', 'Catatau', 'Cindy'];

// Nao permite reatribuir outro array
//const personagens = ['Harry', 'Rony', 'Hermione'];

// Mas permite realizar adicionar, remover ou alterar valores diretamente passando sua posicao
personagens.push('Pepe Legal');
personagens.shift();
personagens[1] = 'Dom Pixote';
console.log('Array apos as alteracoes', personagens);