/* 
Enunciado Ejercicio 43:
Dada una colección de letras:
[
   ['A','B','C','D'],
   ['Z','V','K','S'],
   ['F','G','O','E']
]
 
Crea una función que me diga si la palabra que le paso como parametro 
se puede formar con las letras de la colección
 
Ejemplos:
puedeFormarPalabra('PERRO', coleccion)  // false
puedeFormarPalabra('CASO', coleccion)   // true
 */
const colection = [
  ["A", "B", "C", "D"],
  ["Z", "V", "K", "S"],
  ["F", "G", "O", "E"],
];

function canFormWord(word, colection) {
  const flattedColection = colection.flat();

  for (let i = 0; i < word.length; i++) {
    if (!flattedColection.includes(word[i])) return false;
  }

  return true;
}

console.log(canFormWord("PERRO", colection)); // false
console.log(canFormWord("CASO", colection)); // true
