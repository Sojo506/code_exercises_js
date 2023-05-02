/* 
Enunciado Ejercicio 29:
Dado un array de objetos de peliculas de los años 80 y 90. 
 
Crea dos funciones:
- Una que las filtre por género
- y otra que las filtre por la decada en este formato 80s o 90s
 
Array de objetos a utilizar:
const peliculas = [
    { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
    { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
    { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
    { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
    { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
    { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
    { titulo: "Starship Troopers", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "The Fifth Element", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
    { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 }
  ];
 
Ejemplos:
filtrarPorGenero(peliculas, "accion")
filtrarPorDecada(peliculas, "80s")
*/

const movies = [
  { title: "Terminator", gender: "action", yearOfRelease: 1984 },
  { title: "Alien", gender: "science fiction", yearOfRelease: 1979 },
  { title: "Die Hard", gender: "action", yearOfRelease: 1988 },
  { title: "Predator", gender: "action", yearOfRelease: 1987 },
  { title: "Total Recall", gender: "science fiction", yearOfRelease: 1990 },
  { title: "RoboCop", gender: "science fiction", yearOfRelease: 1987 },
  {
    title: "Starship Troopers",
    gender: "science fiction",
    yearOfRelease: 1997,
  },
  {
    title: "The Fifth Element",
    gender: "science fiction",
    yearOfRelease: 1997,
  },
  { title: "Armageddon", gender: "action", yearOfRelease: 1998 },
  { title: "Deep Impact", gender: "science fiction", yearOfRelease: 1998 },
];

function filterByGender(arrayOfMovies, movieGender) {
  console.log(`Filtered by gender: ${movieGender} |`);
  return arrayOfMovies.filter(({ gender }) => gender === movieGender);
}
function filterByDecade(arrayOfMovies, decade) {
  console.log(`Filtered by decade: ${decade} |`);
  return arrayOfMovies.filter(({ yearOfRelease }) => {
    if (decade === "80s") {
      return yearOfRelease >= 1980 && yearOfRelease < 1990;
    } else if (decade === "90s") {
      return yearOfRelease >= 1990 && yearOfRelease < 2000;
    }
  });
}

console.log(filterByGender(movies, "action"));
console.log(filterByDecade(movies, "80s"));
