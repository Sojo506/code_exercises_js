/*
Enunciado Ejercicio 13:
Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo
 
Ejemplos:
calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }); 
 
Devuelve: 27
 
*/

function calculatePolygonArea(polygon) {
  let result = 0;

  if (polygon.type === "square" && polygon.side) {
    result = `Type: ${polygon.type} | ${polygon.side * polygon.side}`;
  } else if (polygon.type === "rectangle" && polygon.base && polygon.height) {
    result = `Type: ${polygon.type} | ${polygon.base * polygon.height}`;
  } else if (polygon.type === "triangle" && polygon.base && polygon.height) {
    result = `Type: ${polygon.type} | ${(polygon.base * polygon.height) / 2}`;
  } else {
    result = "It might not be a polygon, or there isn't enought info";
  }

  return result;
}

console.log(calculatePolygonArea({ type: "square", side: 19 }));
console.log(calculatePolygonArea({ type: "rectangle", base: 19, height: 5 }));
console.log(calculatePolygonArea({ type: "triangle", base: 9, height: 20 }));
