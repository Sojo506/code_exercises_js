/* 
Enunciado Ejercicio 33:
Crea una función a la cual le pase un string y lo convierta 
a un listado en un objeto que cuente el número de elementos.
 
Las palabras no deben incluir guiones ni guiones bajos.
 
Ejemplos:
contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador"); 
 
Devuelve: 
{ pc: 1, ordenador: 2, computadora: 1, consola: 1, ps5: 1, theLastOfUs: 1 }
 */

function countElements(string) {
  const arrayOfWords = string.split(" ");
  const objectElements = {};

  arrayOfWords.forEach((element) => {
    const word = element.replace(/[-_.,!?]/g, "");

    objectElements[word] ??= 0;
    objectElements[word]++;
  });

  return objectElements;
}

console.log(
  countElements("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador")
);
