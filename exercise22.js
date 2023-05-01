/* 
Enunciado Ejercicio 22:
Crea una función que invierta el orden de un texto
sin usar funciones nativas del lenguaje.
 
Ejemplos:
invertirTexto("Hola");
 
Devuelve: 
aloH
 */

function reverseText(text) {
  let auxReversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    auxReversed += text[i];
  }

  return auxReversed;
}

console.log(reverseText("Hello"));
console.log(reverseText("World"));
