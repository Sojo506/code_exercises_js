/*
Enunciado Ejercicio 14:
Dada una cadena de texto, comprobar si es un palindromo o no. No usar funciones de
javascript, solo estructuras de control
 
Los palíndromos son palabras que se leen igual aun estando invertidas. 
Por ejemplo: ana, bob, otto, allivessevilla
 
Ejemplos:
esPalindromo("otto") // Devuelve: true
esPalindromo("victor") // Devuelve: false
 
*/

function isPalindrome(word) {
  const lettersOfWord = [];
  const lettersOfWordReveresed = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== " ") {
      lettersOfWord.push(word[i]);
    }
  }

  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i] !== " ") {
      lettersOfWordReveresed.push(word[i]);
    }
  }

  let wordReversed = "";
  word = "";
  for (let i = 0; i < lettersOfWordReveresed.length; i++) {
    wordReversed += lettersOfWordReveresed[i];
    word += lettersOfWord[i];
  }

  if (wordReversed === word) return true;

  return false;
}

console.log(isPalindrome("otto")); // Devuelve: true
console.log(isPalindrome("victor")); // Devuelve: false
console.log(isPalindrome("reconocer")); // Devuelve: true
console.log(isPalindrome("la ruta natural")); // Devuelve: true
