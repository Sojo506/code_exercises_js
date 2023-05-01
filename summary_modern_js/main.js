// ALerts
// alert("Hello World");

// Variables
let my_name = "Fabián";
console.log("🚀 ~ file: main.js:6 ~ my_name:", my_name);

// Constants
const last_name = "Sojo";
console.log("🚀 ~ file: main.js:12 ~ last_name:", last_name);

const age = 19;

// Concatenation
let conca = my_name + " " + last_name;
console.log("🚀 ~ file: main.js:16 ~ conca:", conca);

// DOM
const greet = document.querySelector("#greet");
greet.textContent = `Hi I'm ${conca}`;

// Conditions
if (age >= 18) {
  greet.textContent += ` and I'm ${age} years old`;
} else {
  greet.textContent += ` and I'm a young`;
}

// Loops
/* for (let init = 0; init < 10; init++) {
  console.log(`This is a loop: ${init+2}`);
} */

// Arrays
const array = ["Juan", "María", "Pedro", "Ana", "Luis", "Lucía"];
console.log("🚀 ~ file: main.js:36 ~ array:", array[5]);

let namesDiv = document.createElement("DIV");
let namesList = document.createElement("UL");
for (let i = 0; i < array.length; i++) {
  let childP = document.createElement("LI");
  childP.textContent = array[i];

  namesList.appendChild(childP);
}

const title = document.createElement("H2");
title.textContent = "List of Names";

namesDiv.appendChild(namesList);
document.body.appendChild(title);
document.body.appendChild(namesDiv);

// Functions
const random_person_info = (name, age) => {
  const data = document.createElement("DIV");
  data.innerHTML = `
    <h2>This is ${name}, and he's about to turn ${age} years old.</h2>  
  `;

  document.body.appendChild(data);
};

random_person_info("Mohammed", 48);

// Objects
let car = {
  model: "Mercedez A Class",
  max_velocity: 320,
  age: 2020,
  showData() {
    console.log(this.model, this.max_velocity, this.age);
  },
};

console.log("<h3>" + car.model + "</h3>");
car.showData();

// Promises
const say_hi = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (false) {
      resolve("Hi hommie");
    } else {
      reject("There's no a greet");
    }
  }, 3000);
});

say_hi
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

  