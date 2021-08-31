/**
 * A imutabilidade buscar evitar modificar referências, principalmente com objetos e listas.
 */

/**
 * Nesse exemplo, crio uma nova propriedade sem alterar as ja existentes
 */
const user = {
    name: 'Joao',
    lastName: 'Silva'
};

/**
 * Uso do spread operator (...): cada propriedade recebida sera colocada no novo objeto
 * Uso da string literal ``: é a mesma coisa que usar + para concatenar
 */
function getUserWithFullName(user){
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName);


/**
 * No exemplo abaixo, eh possivel listar os alunos aprovados, sem modificar a lista original
 */
const students = [
    {
        name: 'Harry',
        grade: 7 
    },
    {
        name:'Rony',
        grade: 6
    },
    {
        name: 'Hermione',
        grade: 10
    }

];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados');
console.log(getApprovedStudents(students));

console.log('Lista de alunos');
console.log(students);
