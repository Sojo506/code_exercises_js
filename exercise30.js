/* 
Enunciado Ejercicio 30:
Dado un array de numeros, permitir los numeros duplicados
un maximo de 2 veces y devolver la longitud del array.
 
Ejemplos:
eliminarDuplicados([4, 4, 4, 2, 2, 3]); // 5
eliminarDuplicados([6, 6, 2, 2, 2, 3]); // 5
eliminarDuplicados([1, 2, 3, 4, 9, 9, 9, 9]); // 5
*/

// By Sojo
/* function maxTwoDuplicates(arrayOfNumbers) {
  const newArrayOfNumbers = [];

  arrayOfNumbers.forEach((number) => {
    if (newArrayOfNumbers.includes(number)) {
      const coincidences = newArrayOfNumbers.filter((n) => n === number).length;

      if (coincidences < 2) {
        newArrayOfNumbers.push(number);
      }
    } else {
      newArrayOfNumbers.push(number);
    }
  });

  return newArrayOfNumbers.length;
} */

// By Victor Robles
function maxTwoDuplicates(arrayOfNumbers) {
  const objectOfNumbers = {};

  for (const number of arrayOfNumbers) {
    if (objectOfNumbers[number] === undefined) {
      objectOfNumbers[number] = 1;
    } else {
      objectOfNumbers[number]++;

      if (objectOfNumbers[number] >= 3) objectOfNumbers[number] = 2;
    }
  }

  let auxLength = 0;

  for (const prop in objectOfNumbers) {
    auxLength += objectOfNumbers[prop];
  }

  return auxLength;
}
console.log(maxTwoDuplicates([4, 4, 4, 2, 2, 3])); // 5
console.log(maxTwoDuplicates([6, 6, 2, 2, 2, 3])); // 5
console.log(maxTwoDuplicates([1, 2, 3, 4, 9, 9, 9, 9])); // 5
