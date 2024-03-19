// Definir los números A y B
var A = parseFloat(prompt("Ingrese el número A:"));
var B = parseFloat(prompt("Ingrese el número B:"));

// Calcular el resultado utilizando un operador ternario
var resultado = (A < B) ? A + B : A - B;

// Mostrar el resultado
if (A < B) {
    console.log("A es menor que B. La suma de A y B es: " + resultado);
} else {
    console.log("A es mayor o igual que B. La resta de A y B es: " + resultado);
}