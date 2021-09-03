let arr = [3,5,7];
arr.foo = "hello";


// for in - Lista INDICE e NOME DE PROPRIEDADE
for (let i in arr) {
    console.log(i); // logs 0, 1, 2, "foo"
}

// for of - Lista os VALORES, e nao propriedades
for (let i of arr) {
    console.log(i); // logs 3, 5, 7
}