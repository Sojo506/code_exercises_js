/* 
Enunciado Ejercicio 20:
Crea una función que ordene un array de objetos en base a las propiedades
que le pase por parametro.
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
 
 
Ejemplos:
ordenarObjetos(usuarios, "edad");
 */

const users = [
  { name: "Antonio", age: 20 },
  { name: "Juan", age: 23 },
  { name: "Pepe", age: 12 },
  { name: "Raul", age: 28 },
  { name: "Paco", age: 38 },
  { name: "Jason", age: 56 },
];

function orderObjects(users, prop) {
  if (!users[0][prop]) return console.log("That prop doesn't exist.");

  console.log(`Order by ${prop}`);

  users.sort((a, b) => {
    if (typeof a[prop] === "string")
      return a[prop][0].localeCompare(b[prop][0]); // this option
    // instead of this one: return a[prop][0] < b[prop][0] ? -1 : 1;

    if (typeof a[prop] === "number") return a[prop] - b[prop];
  });

  console.log(users);
}

orderObjects(users, "name");
orderObjects(users, "age");
orderObjects(users, "lastname");