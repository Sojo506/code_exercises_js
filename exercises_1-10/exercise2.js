/*
Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
 
*/

function simplifyRoute(route) {
  // create variable stack to store the route parts
  let stack = [];

  // split route in its different parts using the separator "/"
  const parts = route.split("/");

  // iterate each part
  for (const part of parts) {
    // if the part is ".." take out the last part of the stack
    if (part === "..") {
      stack.pop();

      // if the part is different to "." or ".." or "an empty string"
      // keep that part in the stack
    } else if (part !== "." && part !== "") {
      stack.push(part);
    }
  }

  return "/" + stack.join("/");
}

console.log(simplifyRoute("/home/")); // Salida: /home
console.log(simplifyRoute("/x/./y/../../z/")); // Salida: /z
console.log(simplifyRoute("/../")); // Salida: /
console.log(simplifyRoute("/home//pruebas/")); // Salida: /home/pruebas
