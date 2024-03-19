// Definir el año a verificar
var year = parseInt(prompt("Ingrese un año:"));

// Verificar si el año es bisiesto
var esBisiesto = false;
for (var i = 0; i < 1; i++) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        esBisiesto = true;
        break;
    }
}

// Mostrar el resultado
if (esBisiesto) {
    console.log(year + " es un año bisiesto.");
} else {
    console.log(year + " no es un año bisiesto.");
}