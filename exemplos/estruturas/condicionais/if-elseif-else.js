/**
 * if (condicao) {
 *  code here
 * }
 * 
 * if (condicao) {
 *    code here
 * } else {
 *    code here
 * }
 */

const array = [0,1,2,3,4,5];
array.forEach(item =>{
    if (item%2==0){
        console.log(item + " eh par");
    } else {
        console.log(item + " eh impar");
    }
})

/**
 * if (condicao) {
 *    code here
 * } else if (condicao) {
 *    code here
 * } else {
 *    code here
 * }
 * 
 * vai cair na primeira expressao que atender
 */
array.forEach(item => {
    if (item % 2 === 0) {
        console.log(item + " divisivel por 2");
    } else if (item % 3 === 0) {
        console.log(item + " divisivel por 3");
    } else if (item % 5 === 0) {
        console.log(item + " divisivel por 5");
    } else {
        console.log(item + " nao atendeu as condicoes");
    }
})