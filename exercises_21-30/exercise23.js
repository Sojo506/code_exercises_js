/* 
Enunciado Ejercicio 23:
Crea una función que a la cual le pase unos números en un array y me decodifique
el mensaje teniendo en cuenta que cada letra tiene un numero asignado.
 
Las letras del abecedario de la A a la Z tienen un número
por ejemplo la A es el numero 1 y la Z es el numero 26
 
Ejemplos:
decodificarMensaje([8, 15, 12, 1]);
 
Devuelve: 
HOLA
 */

function decodeMessage(arrayOfNumbers) {
  let decodedMessage = "";

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    decodedMessage += String.fromCharCode(parseInt(arrayOfNumbers[i]) + 64);
  }

  return decodedMessage[0] + decodedMessage.slice(1).toLowerCase();
}

console.log(decodeMessage([19, 15, 10, 15]));
