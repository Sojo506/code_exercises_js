/* 
Enunciado Ejercicio 37:
Crea dos funciones que comprueben si dado un array de números,
todos ellos son pares.
 
Una función usando metodos del lenguaje y otra solo usando estructuras de control.
 
Ejemplos:
todosPares([1, 2, 3, 4]); // false
todosPares([2, 6, 8, 12]); // true
*/

// v1
function allPairs(arrayOfNumbers) {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 !== 0) {
      return false;
    }
  }

  return true;
}

// v2
function allPairs(arrayOfNumbers) {
  return arrayOfNumbers.every((number) => number % 2 === 0);
}

console.log(allPairs([1, 2, 3, 4])); // false
console.log(allPairs([2, 6, 8, 12])); // true
