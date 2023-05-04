/*
Enunciado Ejercicio 18:
Dado un array de usuarios, mostrar sólo los que tengan más de 20 años
y en su nombre tengan la letra "o" y "n"
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
 
Ejemplos:
filtrarUsuarios(usuarios);
 
Devuelve: 
[
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Jason', edad: 56}
]
 
*/

const users = [
  { name: "Antonio", age: 20 },
  { name: "Juan", age: 23 },
  { name: "Pepe", age: 12 },
  { name: "Raul", age: 28 },
  { name: "Paco", age: 38 },
  { name: "Jason", age: 56 },
  { name: "Fabian", age: 20 },
];

function filterUsers(arrayOfUsers) {
  return arrayOfUsers.filter(
    ({ name, age }) =>
      age >= 20 &&
      name.toLowerCase().includes("a") &&
      name.toLowerCase().includes("n")
  );
}

console.table(filterUsers(users));
