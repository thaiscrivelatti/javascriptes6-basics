/**
 * Tipo objeto possui propriedades com diferentes valores
 */
let user = {
 name: 'Luna Lovegood'
};

console.log(user);

// Alterando propriedade do objeto
user.name = 'Cedrico Diggory';
user['name'] = 'Cho Chang';
console.log(user);

// Propriedade pode ser acessada por uma string, caso seja necessario alguma implementacao dinamica
const prop = 'name';
user[prop] = 'Minerva';
console.log(user);

// Criando uma propriedade
user.lastName = 'Mcgonagall';
console.log(user);

//Deletando uma propriedade
delete user.name;
console.log(user);
