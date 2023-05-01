/*
Enunciado Ejercicio 16:
Crea una función que meta en una caja de asteriscos la frase 
que le pasemos por parametro
 
Ejemplos:
mostrarTextoCaja('Hola soy Fabián Sojo DEV');
 
**********
* Hola   *
* soy    *
* Fabián *
* Sojo   *
* DEV    *
**********
 
*/

function showTextBox(stringOfWords) {
  stringOfWords = stringOfWords.split(" ");
  let box = "";

  const biggestLengthWord = stringOfWords.reduce(
    (acumulator, currentWord) =>
      acumulator.length < currentWord.length ? currentWord : acumulator,
    ""
  );

  const defaultAskerisks = 4;
  const asterisks = defaultAskerisks + biggestLengthWord.length;
  const dinamicSpaces = (i) =>
    biggestLengthWord.length - stringOfWords[i].length;

  box += "*".repeat(asterisks) + "\n";

  for (let i = 0; i < stringOfWords.length; i++) {
    box += "* " + stringOfWords[i] + " ".repeat(dinamicSpaces(i)) + " *\n";
  }

  box += "*".repeat(asterisks);

  return box;
}

console.log(
  showTextBox(
    "Hola soy Fabián Sojo, un Desarrollador Web y voy a conseguir todo lo que me proponga"
  )
);
