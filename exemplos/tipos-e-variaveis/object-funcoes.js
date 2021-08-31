const user = {
    name: "Luna",
    lastName: "Lovegood"
}

// Recupera as chaves/propriedades do objeto
console.log("Propriedades do objeto user: ", Object.keys(user));

// Recupera os valores das chaves do objeto
console.log("Valores das propriedades do objeto user: ", Object.values(user));

// Retorna um array de arrays contendo [nome_propriedade, valor_propriedade]
console.log("Lista de propriedades e valores: ", Object.entries(user));

// Propriedades de objetos 
// Pensando em imutabilidade, não é recomendado mudar o objeto principal
Object.assign(user, {fullName: "Luna Lovegood"});
console.log("Adiciona a propriedade fullName no objeto user: ", user);

// Recomenda-se fazer como abaixo, o primeiro parametro, um objeto vazio, eh o novo objeto a ser criado,
// Nao altera-se o object user original
console.log("Retorna um novo objeto margeando dois ou mais objetos: ", Object.assign({}, user, {age: 26}));

// Previne todas as alterações de um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log("Variavel newObj apos alteracoes: ", newObj);

// Permite apenas alteracoes de propriedades existentes no objeto
// Nao permite que crie e nem delete propriedades
const person = { name: "Neville" };
Object.seal(person);

person.name = "Neville Longbottom";
delete person.name;
person.age = 26;
console.log("Variavel person apos alteracoes: ", person);
