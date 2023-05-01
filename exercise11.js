/*
Enunciado Ejercicio 11:
 Crea una función a la cual le pase un array de numeros
 y un numero que será el resultado de la suma de dos de los valores
 
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]
 
*/

function addTwo(arrayOfNumbers, number) {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    let auxNumber = number - arrayOfNumbers[i];

    if (arrayOfNumbers.includes(auxNumber) && auxNumber !== arrayOfNumbers[i]) {
      return [arrayOfNumbers[i], auxNumber];
    }
  }

  return "There wasn't a match";
}

console.log(addTwo([3, 7, 8, 2], 10)); // [3, 7] (ambos suman 10)
console.log(addTwo([4, 5, 9, 1], 10)); // [9, 1]
console.log(addTwo([1, 2, 3, 4, 7], 5)); // [1, 4]
