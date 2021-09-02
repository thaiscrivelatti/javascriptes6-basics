// Declaracao padrao de uma funcao
function fn(){
    return "Code here funcao normal";
}

// Retorna o tipo de retorno da funcao, ou seja, uma string
console.log("O tipo de retorno da funcao eh: ", typeof fn());

// Retorna que fn eh do tipo Function
console.log("O tipo de fn eh: ", typeof fn);

/**
 * Arrow function, traduzindo literal "funcao de seta"
 * No exemplo abaixo, uma variavel const chamada arrowFn recebe uma funcao, representada pelos parenteses
 * os quais podem contar parametros ou nao. A seta aponta para a implementacao ou retorno a ser executado.
 * Nesse exemplo, o retorno esta implicito
 */ 
 const arrowFn = () => "Code here arrow function";

 // No exemplo abaixo, a seta aponta para um bloco de codigo a ser executado. O retorno esta explicito.
 const arrowFn2 = () => {
     if (true) {
         return "Code here bloco de codigo arrow function 2";
     }
 } 
 
 // Receber parametros
 const logValue = value => console.log("logValue:", value);
 const logFnResult = fnParam => console.log("fnParam: ", fnParam());
 logFnResult("logFnResult: ", fn);

  
 /*--- Encadeamento de funcoes ---*/
 // Receber e retornar funcoes
 // No exemplo abaixo, recebe a funcao fnParam como parametro e um parametro de permissao
 // Se eh para executar a funcao, executa, caso contrario nao acontece nada.
 const controlFnExec;
 controlFnExec => fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); //Executara a funcao fn
handleFnExecution(); // Nao executara a funcao fn

// controlFnExec como funcao
function controlFnExec(fnParam){
    return function(allowed){
        if (allowed){
            fnParam();
        }
    }
}