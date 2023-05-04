/*
Enunciado Ejercicio 15:
Dada un array de palabras, crear una función que lo devuelva ordenado
por la longitud de sus palabras de menor a mayor
 
Ejemplos:
ordenarPorLongitud([
  "Hola",
  "soy",
  "Víctor Robles",
  "como",
  "estas",
  "hoy",
  "amigo",
  "yo",
  "voy",
  "a",
  "estudiar",
  "ahora"
]);
 
*/

function orderByLength(arrayOfWords) {
  return arrayOfWords.sort((a, b) => a.length - b.length);
}

console.log(
  orderByLength([
    "Hola",
    "soy",
    "Víctor Robles",
    "como",
    "estas",
    "hoy",
    "amigo",
    "yo",
    "voy",
    "a",
    "estudiar",
    "ahora",
  ])
);
