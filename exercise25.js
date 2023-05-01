/* 
Enunciado Ejercicio 25:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"]);
 
Devuelve: 
[ 'nombre.jpg', 'apellido.doc', 'nombre.png', 'nombre(1).png', 'nombre(1).jpg', 'nombre(2).jpg'] 
*/

function renameFiles(arrayOfFiles) {
  return arrayOfFiles.map((file, indexFile) => {
    const matches = arrayOfFiles.filter((commonFile, indexCommomFile) => {
      if (commonFile === file && indexFile > indexCommomFile) {
        return commonFile;
      }
    }).length;

    const auxSplit = file.split(".");

    if (matches > 0) return `${auxSplit[0]}(${matches}).${auxSplit[1]}`;
    else return file;
  });
}

console.log(
  renameFiles([
    "name.jpg",
    "lastname.doc",
    "name.png",
    "name.png",
    "name.jpg",
    "name.jpg",
  ])
);
