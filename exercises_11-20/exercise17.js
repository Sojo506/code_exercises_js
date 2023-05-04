/*
Enunciado Ejercicio 17:
Dada un array de frases, contar el número de palabras que tiene
 
Ejemplos:
contarPalabras([
                "Hola, soy Víctor Robles WEB",
                "Me gusta programar",
                "Y soy desarrollador web"
            ]);
 
Devuelve: 12
 
*/

function countWords(arrayOfPhrases) {
  let auxCounter = 0;

  arrayOfPhrases.forEach((stringOfWords) => {
    const arrayOfWords = stringOfWords.split(" ");

    auxCounter += arrayOfWords.length;
  });

  return `Total of words ${auxCounter}`;
}

console.log(
  countWords([
    "Hola, soy Fabián Sojo",
    "Me gusta programar",
    "Y soy desarrollador web",
  ])
);
