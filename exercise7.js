/*
Enunciado Ejercicio 7:
Dada un array de enteros, detectar si esa lista
de números es una permutación del 1 al ultimo número del array.
 
En este caso una permutación es una secuencia de números
en orden sin que falte ninguno entre ellos.
 
Devolver el número faltante más grande.
 
El array puede venir desordenado.
 
Ejemplos:
permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
permutacion([1, 2, 3, 5]))     // Devuelve: 4
 
*/

function permutation(arrayOfNumbers) {
  arrayOfNumbers.sort((a, b) => a - b);
  const missedNumbers = [];

  for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
    if (arrayOfNumbers[i] + 1 !== arrayOfNumbers[i + 1]) {
      missedNumbers.push(arrayOfNumbers[i] + 1);
    }
  }

  if (missedNumbers.length) return missedNumbers[missedNumbers.length - 1];
  return arrayOfNumbers[arrayOfNumbers.length - 1];
}

console.log(permutation([1, 2, 3, 4, 5]));
console.log(permutation([2, 1, 4, 6]));
console.log(permutation([1, 2, 3, 4, 6, 7, 8, 9, 11]));
console.log(permutation([80, 81, 82, 83, 85, 87, 88, 89, 90]));
