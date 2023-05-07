/* 
Enunciado Ejercicio 38:
Crea una función que convierta un número a binario.
 
Ejemplos:
aBinario(10) // 1010
aBinario(76) // 1001100
*/

function toBinary(number) {
  let binaryNumber = "";

  while (number > 0) {
    binaryNumber = (number % 2) + binaryNumber;
    number = Math.floor(number / 2);
  }

  return parseInt(binaryNumber);
}

console.log(toBinary(10)); // 1010
console.log(toBinary(76)); // 1001100
