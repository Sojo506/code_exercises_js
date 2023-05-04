/*
Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8
 
*/

function addEvenNumbers(arrayOfNumbers) {
  let finalSum = 0;
  
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 === 0) {
      finalSum += arrayOfNumbers[i];
    }
  }

  return finalSum;
}

console.log(addEvenNumbers([2, 13, 6, 15]));
