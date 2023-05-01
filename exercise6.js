/*
Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
Ejemplo:
bisiestos(2023);
 
// Salida:
2024
2028
2032
2036
2040
2044
2048
2052
 
*/

function leapYears(year, limit) {
  const array = [];

  while (limit > 0) {
    const isLeap = new Date(year, 1, 29).getMonth();

    if (isLeap === 1) {
      array.push(year);
    }

    limit--;
    year++;
  }

  return array;
}

console.log(leapYears(new Date().getFullYear(), 40));
