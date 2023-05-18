/* 
Enunciado Ejercicio 40:
Crea una función que convierta un número romano a decimal.
 
Ejemplos:
romanoAEntero("XVIII")   // 18
romanoAEntero("CXX")     // 120
*/

const romanCharacters = [
  { romanValue: "M", decimalValue: 1000 },
  { romanValue: "CM", decimalValue: 900 },
  { romanValue: "D", decimalValue: 500 },
  { romanValue: "CD", decimalValue: 400 },
  { romanValue: "C", decimalValue: 100 },
  { romanValue: "XC", decimalValue: 90 },
  { romanValue: "L", decimalValue: 50 },
  { romanValue: "XL", decimalValue: 40 },
  { romanValue: "X", decimalValue: 10 },
  { romanValue: "IX", decimalValue: 9 },
  { romanValue: "V", decimalValue: 5 },
  { romanValue: "IV", decimalValue: 4 },
  { romanValue: "I", decimalValue: 1 },
];

const romanToInt = (romanNumber) => {
  let aux = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    aux += romanCharacters.find(
      (element) => element.romanValue === romanNumber[i]
    ).decimalValue;
  }

  return aux;
};

console.log(romanToInt("XVIII")); // 18
console.log(romanToInt("CXX")); // 120
