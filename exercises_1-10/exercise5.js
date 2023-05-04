/*
Enunciado Ejercicio 5:
Dado un array de personas con nombres y apellidos
crear una función para ordenar el array por los apellidos
en orden alfabético
 
Ejemplo:
ordenarPorApellidos([
    "Fabian Sojo",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone",
    "Robert Downey"
]);  
 
*/

/* By Robles */
/* function orderByLastName(array) {
  const lastNames = array.map((person) => person.split(" ")[1]);

  lastNames.sort();

  const peopleOrdered = lastNames.map((lastName) => {
    const completeName = array.find(
      (people) => people.split(" ")[1] === lastName
    );
    return completeName;
  });

  return peopleOrdered;
} */

/* By Sojo */
function orderByLastName(array) {
  return array.sort((subject1, subject2) => {
    subject1 = subject1.split(" ");
    subject2 = subject2.split(" ");

    if (subject1[1].toLowerCase() < subject2[1].toLowerCase()) {
      return -1;
    }

    if (subject1[1].toLowerCase() > subject2[1].toLowerCase()) {
      return 1;
    }

    return 0;
  });
}

console.log(
  orderByLastName([
    "Fabian Sojo",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone",
    "Robert Downey",
  ])
);
