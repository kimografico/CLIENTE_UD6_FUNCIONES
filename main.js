let palabras = [];
let respuesta;
do {
    respuesta = prompt("Por favor, escribe una palabra");
    palabras.push(respuesta);
} while (respuesta != null && respuesta != "");
if (respuesta==""){
    palabras.pop();
}