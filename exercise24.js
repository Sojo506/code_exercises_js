/* 
Enunciado Ejercicio 24:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]);
 
Devuelve: 
[ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ]
 */

function renameFiles(arrayOfFiles) {
  return arrayOfFiles.map((file, indexFile) => {
    const matches = arrayOfFiles.filter((commonFile, indexCommomFile) => {
      if (commonFile === file && indexFile > indexCommomFile) {
        return commonFile;
      }
    }).length;

    if (matches > 0) return `${file}(${matches})`;
    else return file;
  });
}

console.log(renameFiles(["name", "lastname", "name", "name"]));
