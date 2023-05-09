/* 
Enunciado Ejercicio 39:
Dado un número crea una función que genere todas las combinaciones
de parentesis válidas.
 
Ejemplos:
combinacionesParentesis(3);
 
Devuelve:
[
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
]
*/

function combinationParenthesis(number) {
  const results = [];

  if (number < 1) return results;

  generateParenthesis("", number, number, results);

  return results;
}

let counter = 0;

function generateParenthesis(combination, open, closed, results) {
  if (open === 0 && closed === 0) {
    results.push(combination);
    return;
  }

  if (open > 0) {
    generateParenthesis(combination + "(", open - 1, closed, results);
  }

  if (closed > 0 && open < closed) {
    generateParenthesis(combination + ")", open, closed - 1, results);
  }

  counter++;
}

console.table(combinationParenthesis(3));
