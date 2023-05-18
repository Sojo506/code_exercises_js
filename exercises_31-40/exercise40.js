/* 
Enunciado Ejercicio 40:
Crea una función que convierta un número romano a decimal.
 
Ejemplos:
romanoAEntero("XVIII")   // 18
romanoAEntero("CXX")     // 120
*/

const romanCharacters = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const romanToInt = (romanNumber) => {
  let aux = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    if (
      i === romanNumber.length - 1 ||
      romanCharacters[romanNumber[i + 1]] <= romanCharacters[romanNumber[i]]
    ) {
      aux += romanCharacters[romanNumber[i]];
    } else {
      aux -= romanCharacters[romanNumber[i]];
    }
  }

  return aux;
};

console.log(romanToInt("XVIII")); // 18
console.log(romanToInt("CXX")); // 120
console.log(romanToInt("IX")); // 9
