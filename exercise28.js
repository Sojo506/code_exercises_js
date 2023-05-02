/* 
Enunciado Ejercicio 28:
Crea una función que me diga si un número es armstrong o no.
 
Un número es armstrong si la suma de los cubos de sus dígitos es igual al número. 
Por ejemplo, el número 371 es armstrong porque 3^3 + 7^3 + 1^3 = 371.
 
Si la cifra es de 4 digitos, se eleva a 4, y si es de 5 a 5.
 
Ejemplos:
esArmstrong(371)  // Devuelve: true
*/

function isArmstrong(number) {
  const numberToString = number.toString();
  const raisedNumber = numberToString.length;
  let auxNumber = 0;

  for (let i = 0; i < numberToString.length; i++) {
    auxNumber += Math.pow(parseInt(numberToString[i]), raisedNumber);
  }

  return auxNumber === number ? true : false;
}

console.log(isArmstrong(371));
console.log(isArmstrong(19));
console.log(isArmstrong(153));
