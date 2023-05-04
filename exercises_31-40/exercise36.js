/* 
Enunciado Ejercicio 36:
Crea un programa que encuentre las parejas de números que como resultado
dan un número que pasamos a la función por parametro.
 
Ejemplos:
encontrarParejasConSuma([1, 2, 3, 4], 5);
 
Devuelve: 
[ [ 1, 4 ], [ 2, 3 ] ]
*/

function findMatches(arrayOfNumbers, number) {
  if (!Array.isArray(arrayOfNumbers) || arrayOfNumbers.length < 2) return;
  const matches = [];

  arrayOfNumbers.forEach((currentNumber, index) => {
    const auxNumber = number - currentNumber;

    // see if the number exist and isnt equal to n
    if (
      arrayOfNumbers.slice(index + 1).includes(auxNumber) &&
      auxNumber !== currentNumber
    ) {
      // then add them
      matches.push([currentNumber, auxNumber]);
    }
  });

  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5, 6, 7, 8, 9], 12));
console.log(findMatches([1, 2, 3, 4, 9, 5, 10, 11, 7, 6], 8));
