// AND &&
// Soh retorna verdadeiro se ambas condicoes forem verdadeiras
var a1 = true && true;      // true
var a2 = true && false;     // false
var a3 = false && false;    // false
var a4 = false && (3==4);   // false
var a5 = "Gato" && "Cao";   // Cao
var a6 = false && "Cao";    // false


// OR ||
// Soh retorna false se ambas condicoes forem falsas
var a1 = true || true;      // true
var a2 = true || false;     // true
var a3 = false || false;    // false 
var a4 = false || (3==4);   // false
var a5 = "Gato" || "Cao";   // Gato
var a6 = false || "Cao";    // Cao

// NOT !
var a1 = !true;   // false
var a2 = !false;  // true
var a3 = !"Gato"; // false
