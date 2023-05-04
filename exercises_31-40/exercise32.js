/* 
Enunciado Ejercicio 32:
Dado un texto, crea una función que sea capaz de generar
un nuevo texto que incluya solo las palabras de 4 caracteres o más.
 
Ejemplos:
fraseFiltrada("Hola soy Victor Robles, hoy hace frio"); 
 
// Devuelve: Hola Victor Robles, hace frio
*/

function filterWordsBy4Chars(stringOfWords) {
  const arrayOfWords = stringOfWords.split(" ");

  return arrayOfWords.filter((word) => word.length >= 4).join(" ");
}

console.log(filterWordsBy4Chars("Hola soy Victor Robles, hoy hace frio"));
console.log(filterWordsBy4Chars("Hi I'm Fabián Sojo, a Web Developer"));
