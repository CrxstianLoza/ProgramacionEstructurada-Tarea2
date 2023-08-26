function sumTwoSmallestNumbers(numbers) {
    const positiveNumbers = numbers.filter(num => num > 0);
  
    const Ordenarnumeros = positiveNumbers.sort((a, b) => a - b);
  
    const sum = Ordenarnumeros[0] + Ordenarnumeros[1];
  
    return sum;
  }

const valores = (prompt(`Ingrese los valores separados por una coma`))

if (valores === null || valores.trim() === "") {
    console.log("Debe ingresar al menos 2 numeros.");
} else{
    const numberArray = valores.split(',').map(Number) 
  
    const suma = sumTwoSmallestNumbers(numberArray);
  
    console.log(`La suma de los dos números positivos más pequeños es: ${suma}`);
}




  