/*
Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano
 
Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV
 
*/

function intToRoman(number) {
  let romanNumber = "";
  const startedNumber = number;

  const romanCharacters = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (let i = 0; i < decimalValues.length; i++) {
    while (number >= decimalValues[i]) {
      romanNumber += romanCharacters[i];
      number -= decimalValues[i];
    }
  }

  return `El número ${startedNumber} en romanos es equivalente a: ${romanNumber}`;
}

console.log(intToRoman(945));
