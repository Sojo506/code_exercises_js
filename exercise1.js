/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal.
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 1:
Dado un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.
 
Ejemplo:
mostrarInformacionSuperheroe('Iron Man');
 
Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores
 
Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);
 
Salida:
Muestra la información de todos los superheroes
 
*/

// Crear array de objetos de superheroes marvel
const infoSuperheroes = {
  "Iron Man": {
    nombreReal: "Tony Stark",
    poderes: ["Tecnologia avanzada", "Movilidad aérea"],
    equipo: "Los vengadores",
  },
  "Capitán América": {
    nombreReal: "Steve Rogers",
    poderes: ["Fuerza sobrehumana", "Agilidad y reflejos sobresalientes"],
    equipo: "Los vengadores",
  },
  Thor: {
    nombreReal: "Thor Odinson",
    poderes: ["Mjolnir", "Viento y trueno"],
    equipo: "Los vengadores",
  },
  "Spider-Man": {
    nombreReal: "Peter Parker",
    poderes: ["Balanceo", "Telarañas pegajosas", "Sentido aracnido"],
    equipo: "Los vengadores",
  },
  Hulk: {
    nombreReal: "Bruce Banner",
    poderes: ["Fuerza sobrehumana", "Invulnerabilidad"],
    equipo: "Los vengadores",
  },
  Batman: {
    nombreReal: "Bruce Wayne",
    poderes: ["Inteligencia superior", "Habilidades de lucha"],
    equipo: "Liga de la Justicia",
  },
  "Mujer Maravilla": {
    nombreReal: "Diana Prince",
    poderes: ["Superfuerza", "Vuelo", "Invulnerabilidad"],
    equipo: "Liga de la Justicia",
  },
  Superman: {
    nombreReal: "Clark Kent",
    poderes: ["Superfuerza", "Visión de calor", "Vuelo"],
    equipo: "Liga de la Justicia",
  },
};

/* By: Sojo */
function superheroInformation(searchHero) {
  if (typeof searchHero === "string") {
    if (infoSuperheroes.hasOwnProperty(searchHero)) {
      return { hero: searchHero, ...infoSuperheroes[searchHero] };
    } else return `${searchHero} doesn't exist in my db`;
  } else {
    const heroArray = [];

    searchHero.forEach((hero) => {
      if (infoSuperheroes.hasOwnProperty(hero)) {
        heroArray.push({ hero, ...infoSuperheroes[hero] });
      }
    });

    if (heroArray.length === 0)
      return "Those super heroes don't exist in my db";
    else return heroArray;
  }
}

//console.log(superheroInformation("superman"));

/* By: Robles */
function showHeroInfo(hero) {
  if (hero in infoSuperheroes) {
    const data = infoSuperheroes[hero];

    console.log("##############");
    return { hero, ...data };
  } else {
    console.log("##############");
    return `${hero} doesn't exist in my db`;
  }
}

//console.log(showHeroInfo("Hulk"));

function showHeroesInfo(array) {
  array.forEach((hero) => {
    console.log(showHeroInfo(hero));
  });
}

showHeroesInfo(["Hulk", "Batman", "Joker"]);