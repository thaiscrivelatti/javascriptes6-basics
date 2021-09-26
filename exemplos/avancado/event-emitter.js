/**
 * Event Emitter
 * Mais uma forma de lidar com programação assíncrona
 * O event emitter eh exclusivo do Node
 */

const EventEmitter = require("events"); // Eh preciso importar o pacote "events" que contem a classe EventEmitter

const emitter = new EventEmitter();
emitter.on("User logged", data => {
    console.log(data);
});
emitter.emit("User logged", {user: "Rony Weasley"});

/** Outro exemplo
 * Classe extendendo Event Emitter
 */

class Users extends EventEmitter {
    userLogged(data) {
        this.emit("User logged", data);
    }
}
const users = new Users();
users.on("User logged", data => {
    console.log(data);
});
users.userLogged({user: "Giny Weasley"});