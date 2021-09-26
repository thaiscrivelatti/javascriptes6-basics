/**
 * Exemplos clássicos de callbacks
 */
function doSomething(callback) {
    setTimeout(function(){
        //do something
        callback("First data");
    }, 1000);
}
function doOtherThing(callback) {
    setTimeout(function(){
        //do other thing
        callback("Second data");
    }, 1000);
}
function doAll(){
    try {
        doSomething(function(data){
            var processedData = data.split('');

            try {
                doOtherThing(function(data){
                    var processedData2 = data.split('');

                    setTimeout(function(){
                        console.log(processedData, processedData2);
                    }, 1000);
                })
            } catch (error) {
                // handle error
            }
        })
    } catch (error) {
        // handle error
    }
}
doAll();

/**
 * Reescrevendo o código acima utilizando Promises
 * Instancia-se uma promise atraves do construtor, passando os parametros resolved e rejected
 */
const doSomethingPromise = new Promise((resolved, rejected) => {
    setTimeout(function(){
        //do something
        resolved("First data");
    },1500);
});
const doOtherThingPromise = new Promise((resolved, rejected) => {
    setTimeout(function(){
        //do something
        resolved("Second data");
    },1000);
});

/**
 * Três estados da Promise
 * Pending
 * Fulfilled
 * Rejected
 */

//Pendente
console.log(doSomethingPromise);

//Fulfilled
doSomethingPromise.then(data => console.log(data));

/**
 * Encadeamento de promises
 */
doSomethingPromise.then(data => {
    console.log(data);
    return doOtherThingPromise
})
.then(data2 => console.log(data2))
.catch(error => console.log('Ops', error));

// Executando promises em paralelo
Promise.all([doSomethingPromise, doOtherThingPromise]).then(data => {
    console.log(data);
})

// A que resolver primeiro, é a que retorna
Promise.race([doSomethingPromise, doOtherThingPromise]).then(data => console.log("Resolveu primeiro:", data));

