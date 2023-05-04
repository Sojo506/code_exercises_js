/*
Enunciado Ejercicio 12:
Crea un programa que cuente las palabras de un texto
 
Ejemplos:
contarPalabras("El perro de san roque no tiene el rabo 
porque es un perro muy muy malo");
 
Devuelve:
{
  el: 2,
  perro: 2,
  de: 1,
  san: 1,
  roque: 1,
  no: 1,
  tiene: 1,
  rabo: 1,
  porque: 1,
  es: 1,
  un: 1,
  muy: 2,
  malo: 1
}
*/

function countWords(stringOfWords) {
  stringOfWords = stringOfWords
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .split(" ");
  const objetOfWords = {};

  for (let i = 0; i < stringOfWords.length; i++) {
    objetOfWords[stringOfWords[i]] ??= 0;
    objetOfWords[stringOfWords[i]]++;
  }

  return objetOfWords;
}

console.log(
  countWords(
    "El perro de San Roque no tiene el rabo porque es un perro muy muy malo"
  )
);
