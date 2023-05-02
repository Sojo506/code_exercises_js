/* 
Enunciado Ejercicio 31:
Dado un texto, crea una función que sea capaz de invertir
el orden de sus palabras.
 
No podemos usar funciones nativas del lenguaje.
 
Ejemplos:
invertirPalabras("Hola soy Victor Robles"); // Devuelve: Robles Victor soy Hola
*/

function reverseWords(stringOfWords) {
  const arrayOfWords = stringOfWords.split(" ");
  const arrayOfReversedWords = [];

  for (let i = arrayOfWords.length - 1; i >= 0; i--) {
    if (arrayOfWords[i] === "") continue;
    arrayOfReversedWords.push(arrayOfWords[i].trim());
  }

  return arrayOfReversedWords.join(" ");
}

console.log(reverseWords("Hi I'm  Fabián Sojo"));
