/**
 * Switch
 * 
 * switch(variavel) {
 *    condicao 1:
 *      code here;
 *      break;
 *    default:
 *      
 * }
 */

const fruit = "banana";

switch(fruit) {
    case "banana":
        console.log("R$ 3,00/Kg");
        break;
    case "papaya":
    case "watermelon":
        console.log("R$ 2,00/Kg");
        break;
    default:
        console.log("Produto nao existe em estoque");
        break;
}

