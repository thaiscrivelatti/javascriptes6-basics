/**
 * Ordenar elementos do array
 */
 const numbers = [2,5,1,4,3];
 const students = [
    {
        name: 'Harry',
        grade: 8
    },
    {
        name: 'Hermione',
        grade: 10
    },
    {
        name: 'Rony',
        grade: 6
    }  
];

/**
 * sort
 * Ordena os elementos do array de acordo com uma condicao
 */
numbers.sort(); // ordena em ordem crescente
console.log(numbers); //[1,2,3,4,5]

students.sort((current, next) => current.grade - next.grade); // nota atual menor que a proxima nota, ordem crescente

// forEach para imprimir array e mostrar ordem atual
students.forEach(element => {
    console.log(element);
});

/**
 * reverse
 * Inverte os elementos do array
 */
numbers.reverse();
console.log(numbers); // [5,4,3,2,1]

/**
 * join
 * Junta todos os elementos de um array, separados por um delimitador e retorna uma string
 */
const numbersString = numbers.join('-');
console.log(numbersString); // 5-4-3-2-1

/**
 * reduce
 * Retorna um novo tipo de dado iterando cada posicao do array
 */

// Para cada value, eh somado na variavel total que inicia com valor zero
const total = numbers.reduce((total, value) => total += value, 0); 
console.log(total); // 15

// Total de notas dividido pelo total de estudantes para calcular a media
const media = students.reduce((totalGrades, students) => totalGrades += students.grade,0) / students.length;
console.log(media); //8

// Nomes dos estudantes
const studentsNames = students.reduce((names, students) => names += students.name+" ", "");
console.log(studentsNames);