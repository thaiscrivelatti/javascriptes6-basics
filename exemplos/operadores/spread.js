/**
 * Spread ...
 * 
 * Ele consegue iterar cada item de um array e passa-los como parametro
 */

// Itera um array ja existente, para criar um novo
var fruits = ["apple", "watermelon"];
var food = ["pizza", ...fruits, "sushi"];

function fn(x,y,z){
    console.log(x,y,z);
}
// itera a variavel passando como parametro para a funcao
var numbers = [0,1,2];
fn(...numbers);
