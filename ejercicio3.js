// Función para verificar si un número es entero positivo
function esEnteroPositivo(numero) {
    return Number.isInteger(numero) && numero > 0;
}

// Leer tres números enteros positivos
var numero1 = parseInt(prompt("Ingrese el primer número entero positivo:"));
var numero2 = parseInt(prompt("Ingrese el segundo número entero positivo:"));
var numero3 = parseInt(prompt("Ingrese el tercer número entero positivo:"));

// Verificar si los números ingresados son enteros positivos
if (esEnteroPositivo(numero1) && esEnteroPositivo(numero2) && esEnteroPositivo(numero3)) {
    // Encontrar el menor número
    var menor = Math.min(numero1, numero2, numero3);

    // Encontrar el mayor número
    var mayor = Math.max(numero1, numero2, numero3);

    // Imprimir el menor y el mayor número
    console.log("El menor número ingresado es: " + menor);
    console.log("El mayor número ingresado es: " + mayor);
} else {
    console.log("Por favor, ingrese tres números enteros positivos válidos.");
}