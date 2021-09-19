/**
 * Enhanced Object Literals (Objetos literais)
 */

// Maneira classica de declarar objetos literais
var obj01 = {
    prop: "Wingardium Leviosa"
};

// Outra maneira
var prop = "Expeliarmus";
var obj02 = {
    prop: prop
};

// Com o es6, não precisa repetir a palavra
var prop = "Expecto Patronum";
var obj03 = {
    prop
};
console.log(obj03);

// Funcoes tambem podem ser referenciadas
function spell() {
    return "Lumos Maxima";
}
var obj04 = {
    spell
}
console.log(obj04.spell());

// Outras formas de utilizar funcoes
var obj05 = {
    sum: function(a, b) {
        return a + b;
    }
}
console.log(obj05.sum(2,2));

var obj06 = {
    sum(a, b) {
        return a + b;
    }
}
console.log(obj06.sum(10,2));

// Maneira antiga de atribuir propriedade, criando objeto antes
var propname = 'propriedade';
var obj07 = {};
obj07[propname + 'concat'] = "Valor";
console.log(obj07);

// Maneira facilitada apos es6
var obj08 = {
    [propname + 'concat']: "Valor"
}
console.log(obj08);

