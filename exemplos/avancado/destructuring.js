/**
 * Destructuring assignment
 */

// Versao classica e verbosa
var frutas = ['Maca', 'Uva', 'Laranja'];
var maca = frutas[0];
var uva = frutas[1];
var laranja = frutas[2];

console.log(maca, uva);

// Apos es6 introduzir Destructuring
var [apple, banana, orange] = ['Apple', 'Banana', 'Orange'];
console.log(orange, apple);

// Com 2 niveis de array, eh preciso colocar chaves nas variaveis tambem
var [blue, red, [green]] = ['Blue', 'Red', ['Green']];
console.log(green);

// Destruindo objeto
var obj01 = {
    name: "Hermione"
}
var { name } = obj01;
console.log(name);

// Objeto dentro de objeto
var obj02 = {
    name: "Hermione",
    petInfo: {
        name: "Crookshanks",
        type: "cat"
    },
    favoriteSpells: ['Wingardium Leviosa','Alohomora'] 
};
var {petInfo:{type}} = obj02;
var {favoriteSpells: [spell1, spell2]} = obj02;
console.log(type, spell2);

// Nome personalizado
var {petInfo: {name:catName}} = obj02;
console.log(catName);


