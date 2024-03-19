// Pedir al usuario que ingrese un número
var numero = parseFloat(prompt("Ingrese un número:"));

// Verificar si el número es positivo, negativo o cero
if (numero > 0) {
    console.log("El número ingresado es positivo.");
} else if (numero === 0) {
    console.log("El número ingresado es cero.");
} else {
    console.log("El número ingresado es negativo.");
}