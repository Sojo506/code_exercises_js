/*
Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
 
*/

function differenceOfDays(date1, date2) {
  date1 = date1 instanceof Date ? date1 : new Date(date1);
  date2 = date2 instanceof Date ? date2 : new Date(date2);

  const differenceOnMill = Math.abs(date1.getTime() - date2.getTime());

  const totalDays = Math.floor(differenceOnMill / 86400000);

  return totalDays !== NaN ? totalDays : "Incorrect format";
}

console.log(differenceOfDays("Apr 29, 2023", "May 9, 2023"));
console.log(differenceOfDays("3/3/2023", "3/20/2023"));
