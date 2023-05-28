/* 
Enunciado Ejercicio 42:
Dado un objeto de superheroes, crear una función que sea capaz
de ordenarlos por su nombre real o por su nombre de superheroe.
 
Ejemplos:
ordenarSuperheroes("nombre")
 
Devuelve:
[
  {
    nombre: 'Batman',
    nombreReal: 'Bruce Wayne',
    poderes: [
      'inteligencia',
      'habilidades físicas sobresalientes',
      'ricos recursos'
    ]
  },
  ...
]
 */

let informacionSuperheroes = {
  Superman: {
    nombreReal: "Clark Kent",
    afiliacion: "DC Comics",
    poderes: ["vuelo", "super fuerza", "super velocidad", "rayos x"],
  },
  "Spider-Man": {
    nombreReal: "Peter Parker",
    afiliacion: "Marvel Comics",
    poderes: ["telarañas", "agilidad", "sensores arácnidos"],
  },
  Batman: {
    nombreReal: "Bruce Wayne",
    afiliacion: "DC Comics",
    poderes: [
      "inteligencia",
      "habilidades físicas sobresalientes",
      "ricos recursos",
    ],
  },
  "Iron Man": {
    nombreReal: "Tony Stark",
    afiliacion: "Marvel Comics",
    poderes: ["armadura de hierro", "inteligencia", "ricos recursos"],
  },
  "Wonder Woman": {
    nombreReal: "Diana Prince",
    afiliacion: "DC Comics",
    poderes: ["super fuerza", "vuelo", "resistencia sobrenatural"],
  },
  Thor: {
    nombreReal: "Thor Odinson",
    afiliacion: "Marvel Comics",
    poderes: ["martillo mágico", "vuelo", "trovador"],
  },
  "The Flash": {
    nombreReal: "Barry Allen",
    afiliacion: "DC Comics",
    poderes: ["super velocidad", "manipulación del tiempo"],
  },
  "Captain America": {
    nombreReal: "Steve Rogers",
    afiliacion: "Marvel Comics",
    poderes: [
      "super fuerza",
      "agilidad",
      "resistencia sobrenatural",
      "escudo indestructible",
    ],
  },
  "Green Lantern": {
    nombreReal: "Hal Jordan",
    afiliacion: "DC Comics",
    poderes: ["anillo mágico", "manipulación de la energía"],
  },
  Hulk: {
    nombreReal: "Bruce Banner",
    afiliacion: "Marvel Comics",
    poderes: [
      "super fuerza",
      "resistencia sobrenatural",
      "transformación en Hulk",
    ],
  },
};

/* function sortByName(data) {
  return Object.keys(data)
    .sort()
    .map((hero) => {
      return { nombre: hero, ...data[hero] };
    });
}

function sortByProp(data, prop) {
  return Object.keys(data)
    .map((hero) => {
      return { nombre: hero, ...data[hero] };
    })
    .sort((a, b) => {
      if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    });
} */

function orderHeroes(data, prop) {
  return Object.keys(data)
    .map((hero) => {
      return { nombre: hero, ...data[hero] };
    })
    .sort((a, b) => {
      if (a[prop] < b[prop]) return -1;
      if (a[prop] > b[prop]) return 1;
      return 0;
    });
}

//console.log(orderHeroes(informacionSuperheroes, "nombre"));
console.log(orderHeroes(informacionSuperheroes, "nombreReal"));
