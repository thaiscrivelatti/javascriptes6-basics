/**
 * Fetch
 * Realiza requests
 */
fetch("/data.json").then(responseStream => {
    return responseStream.json().then(data => {
        console.log(data);
    });
})


fetch("http://127.0.0.1:5500/dataXPTO.json")
.then(responseStream => {
    if (responseStream.status===200) {
        return responseStream.json();
    } else {
        throw new Error("Request error");
    }
}) 
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log("Erro: ", err);
});

/* Para usar outros tipos de request, passa como parametro no fetch
fetch("http://127.0.0.1:5500/dataXPTO.json", 
{
        method: 'post',
        body: JSON.stringify
})
.then(responseStream => {
    if (responseStream.status===200) {
        return responseStream.json();
    } else {
        throw new Error("Request error");
    }
}) 
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log("Erro: ", err);
});
*/