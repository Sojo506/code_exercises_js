/* 
Enunciado Ejercicio 27:
Crea una función a la cual le pasemos una frase y una palabra,
y busque si la palabra existe en la frase. Indistinto de mayusculas y minusculas.
 
Ejemplos:
buscarPalabra('Hola como estas', 'Hola')  // Devuelve: true
*/

function searchWord(phrase, findWord) {
  const phraseToLower = phrase.toLowerCase();
  const aux = phraseToLower.indexOf(findWord.toLowerCase());

  return aux >= 0 ? true : false;
}

console.log(searchWord("Hi, how are you bro?", "Hi"));
