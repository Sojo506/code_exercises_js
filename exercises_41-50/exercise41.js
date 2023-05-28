/* 
Enunciado Ejercicio 41:
Crea una función que invierta los números de un número entero.
 
Ejemplos:
invertirEntero(123)   // 321
invertirEntero(-123)  // -321
 */

function invertInt(number) {
  const numberToString = number.toString().split("");

  if (numberToString.findIndex((i) => i === "-") !== -1) {
    return (
      numberToString.slice(0, 1) + numberToString.slice(1).reverse().join("")
    );
  }

  return numberToString.reverse().join("");
}

console.log(invertInt(123)); // 321
console.log(invertInt(-123)); // -321
