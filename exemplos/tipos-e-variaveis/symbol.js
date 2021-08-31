const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols sao unicos
console.log("Symbol 1 eh igual symbol 2: ", symbol1 == symbol2);

// Prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol("name");
const nameSymbol2 = Symbol("name");

const user = {
    [nameSymbol1]: "Albus",
    [nameSymbol2]: "Percival",
    lastName: "Dumbledore"    
};
console.log(user);

/**
 * Symbols criam propriedades que não são enumerables
 * Ou seja, ele nao pode ser acessado por lacos de repeticao
 * No exemplo abaixo, apenas propriedades nao symbols sao listadas
 */
for (const key in user){
    if (user.hasOwnProperty(key)){
        console.log(`Valor da chave ${key}: ${user[key]} `);
    }
}

// Lista apenas as propriedades que nao sao Symbol
console.log("Propriedades do object user: ", Object.keys(user)); //lastName
// Lista apenas o valores que nao sao Symbol
console.log("Valores das propriedades do object user: ", Object.values(user)); // Dumbledore

// Exibir symbols de um objeto
console.log("Symbols registrados no objeto user: ", Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto, incluindo symbols
console.log("Todas as propriedades do obejto user: ", Reflect.ownKeys(user));

// Exemplo de utilizacao de Symbol eh na criacao de um enum
const directions = {
 UP: Symbol('UP'),
 DOWN: Symbol('DOWN'),
 LEFT: Symbol('LEFT'),
 RIGHT: Symbol('RIGHT')
};



