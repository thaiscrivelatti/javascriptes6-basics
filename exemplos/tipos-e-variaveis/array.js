/*--- Manipulacao de arrays ---*/

// Declaracao de array simples
const boys = ["Harry", "Rony", "Duda"];

// Exemplo de enum usando Symbol
const gender = {
    BRUXO: Symbol('B'),
    TROUXA: Symbol('T')
}

// Declaracao de array de objetos
const persons = [
    {
        name: "Harry",
        age: 11,
        gender: gender.BRUXO
    },
    {
        name: "Rony",
        age: 11,
        gender: gender.BRUXO
    },
    {
        name: "Duda",
        age: 12,
        gender: gender.TROUXA
    }
];

// Retorna a quantidade de itens de um array
console.log("Total itens do array: ", persons.length);

// Verifica se eh array
console.log("A variavel persons eh um array: ", Array.isArray(persons));

// Iterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`)
});

/**
 * Conceito de imutabilidade: funcoes filter(), map() e reduce() nao alteram o objeto original, criam um novo
 */

// Filtrar array
const bruxos = persons.filter(person => person.gender == gender.BRUXO);
console.log("Nova lista apenas com bruxos: ", bruxos);

// Retornar um novo 
const personWithCourse = persons.map(person => {
    person.course = "Introducao ao JavaScript";
    return person;
});

console.log("Pessoas com a adição do course: ", personWithCourse);

/**
 * Transformar um array em outro tipo
 * Ele retorna um int, resultado de todas as idades somadas, porque foi passado o zero como parametro (34)
 * Se fosse aspas, o resultado seria as strings concatenadas (111112)
 */
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);
console.log("Soma de idade das pessoas: ", totalAge);

// Juntando operações
const totalEvenAges = persons.filter(person => person.age % 2 === 0)
                    .reduce((age, person) => {
                        age += person.age;
                        return age;
                    }, 0);  
console.log("Soma de idades das pessoas que possuem idade par: ", totalEvenAges);
