/**
 * Async / await
 */

const asyncTimer = () => new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve("AsyncTimer");
    }, 1000);
})
const simpleFunc = async () => {
    const data = await asyncTimer();
    return data;
}

/** So o fato de eu colocar o "async" na frente da funcao, ja transforma ela em uma promise 
 * Geralmente nao eh usada de maneira solo, mas acompanhada com o "await", o qual, por sua vez, espera que
 * outras promises sejam resolvidas
*/
console.log(simpleFunc());

simpleFunc().then(data => {
    console.log("Simple func 1",data);
})

const simpleFunc2 = async () => {
    const data = await Promise.all([asyncTimer, fetch("data/json").then(resStream => {
        resStream.json
    })])
    return data;
};

simpleFunc2().then(data => {
    console.log("Simple func 2",data);
})

