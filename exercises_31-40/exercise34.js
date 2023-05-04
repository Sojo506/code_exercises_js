/* 
Enunciado Ejercicio 34
Crea una función a la cual le pase un array y me devuelva
un objeto con los elementos agrupados

Ejemplos:
agrupar([7.2, 8.3, 7.4], Math.floor)
Devuelve: { 7: [7.2, 7.4], 5: [5.3] }

agrupar(['uno', 'dos', 'tres', 'cuatro'], 'length)
Devuelve: { 3: ['uno', 'dos'], 4: ['tres'], 6: ['cuatro'] }

agrupar([{nombre: "victor", edad: 33}, {nombre: "fabian", edad: 19}], edad)
Devuelve:
*/

function group(arrayOfelements, groupBy) {
  if (!arrayOfelements.length || !arrayOfelements[0]) return null;
  const objetcOfElements = {};

  arrayOfelements.forEach((element) => {
    // if we are receiving a function
    if (typeof groupBy === "function") {
      objetcOfElements[groupBy(element)] ??= [];
      objetcOfElements[groupBy(element)].push(element);
    }
    // if we are receiving an array of objetcs
    else if (typeof arrayOfelements[0] === "object") {
      objetcOfElements[element[groupBy]] ??= [];
      objetcOfElements[element[groupBy]].push({ ...element });
    }
    // if we are receiving a property like: .length
    else {
      objetcOfElements[element[groupBy]] ??= [];
      objetcOfElements[element[groupBy]].push(element);
    }
  });

  return objetcOfElements;
}

console.log(group([7.2, 8.3, 7.4], Math.floor));
console.log(group(["uno", "dos", "tres", "cuatro"], "length"));
console.log(
  group(
    [
      { nombre: "victor", edad: 33 },
      { nombre: "fabian", edad: 19 },
      { nombre: "sofi", edad: 19 },
    ],
    "edad"
  )
);
