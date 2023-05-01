/*
Enunciado Ejercicio 4:
Crea el juego del ahorcado.
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
 
Utiliza el método de entrada de datos habitual de tu lenguaje,
en el caso de JS, usaremos la función prompt.
 
Ejemplo:
juegoDelAhorcado('victor');  
 
// Salida:
Adivina la letra: i
La palabra es: _i___
Te quedan 5 intentos
 
*/

const arrayOfSecretWords = [
  "Computadora",
  "Elefante",
  "Invierno",
  "Felicidad",
  "Agua",
  "Perseverancia",
  "Biblioteca",
  "Guitarra",
  "Tortuga",
  "Escarabajo",
  "Piano",
  "Sandwich",
  "Java",
  "Python",
  "Consola",
  "Apple",
];

function hanged() {
  const getWord = Math.floor(Math.random() * arrayOfSecretWords.length);
  const secretWord = arrayOfSecretWords[getWord].toLowerCase();
  let hidedWord = "_".repeat(secretWord.length);
  let tries = 5;

  while (tries > 0 && hidedWord !== secretWord) {
    const letter = window.prompt("Guess a letter");

    if (secretWord.includes(letter.toLocaleLowerCase())) {
      for (let i = 0; i < secretWord.length; i++) {
        if (letter === secretWord[i]) {
          hidedWord = Array.from(hidedWord); // converts a string to an array
          hidedWord[i] = letter;
          hidedWord = hidedWord.join("");
        }
      }
    } else {
      tries--;
    }

    alert(`The word is: ${hidedWord}\nLeft ${tries} tries`);
  }

  if (hidedWord === secretWord) {
    alert(`Congratulations, you have won!🏆 The secret word was ${secretWord}`);
  } else {
    alert(
      `You have lost. Good luck next time!🌠 The secret word was ${secretWord}`
    );
  }
}

const startGame = document.querySelector("#startGame");
startGame.addEventListener("click", () => {
  hanged();
});
