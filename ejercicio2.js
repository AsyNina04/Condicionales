const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el primer número: ', (numero1) => {
  // Convert the input to a floating-point number
  numero1 = parseFloat(numero1);

  // Your code logic goes here
  
  rl.close();
});