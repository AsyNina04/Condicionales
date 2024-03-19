// Definir los números A y B
var A = parseFloat(prompt("Ingrese el número A:"));
var B = parseFloat(prompt("Ingrese el número B:"));

// Verificar si al menos uno de los números es negativo
if (A < 0 || B < 0) {
    // Si al menos uno de los números es negativo, sumarlos
    var resultadoSuma = A + B;
    
    // Mostrar el resultado de la suma
    console.log("Al menos uno de los números es negativo.");
    console.log("La suma de A y B es: " + resultadoSuma);
} else {
    // Si ambos números son positivos, multiplicarlos
    var resultadoMultiplicacion = A * B;
    
    // Mostrar el resultado de la multiplicación
    console.log("Ambos números son positivos.");
    console.log("El producto de A y B es: " + resultadoMultiplicacion);
}