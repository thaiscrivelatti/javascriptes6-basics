// break - para a iteracao
// no exemplo, sai da execucao nao imprimindo numeros acima de 2
console.log("Exemplo de utilizacao do break: ")
var index = 0;
while(true){
    index++;

    if (index > 2) {
        break;
    }

    console.log(index);
}


// continue - pula uma iteracao
// no exemplo abaixo, ele nao vai imprimir os numeros pares
console.log("Exemplo de utilizacao do continue: ");
const array = [1,2,3,4,5,6];
for (let index = 0; index < array.length; index++){
    const element = array[index];
    if (element % 2 === 0) {
        continue;
    }

    console.log(element);
}