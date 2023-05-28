/* 
Enunciado Ejercicio 41:
Crea una función que invierta los números de un número entero.
 
Ejemplos:
invertirEntero(123)   // 321
invertirEntero(-123)  // -321
 */

function invertInt(number) {
  const numberToString = number.toString().split("");

  if (numberToString[0] === "-") {
    return parseInt(
      numberToString.slice(0, 1) + numberToString.slice(1).reverse().join("")
    );
  }

  return parseInt(numberToString.reverse().join(""));
}

console.log(invertInt(123)); // 321
console.log(invertInt(-123)); // -321
