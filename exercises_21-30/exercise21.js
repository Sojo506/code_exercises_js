function generateMatriz(number) {
  const matriz = [];
  let auxCounter = 1;

  for (let row = 0; row < number; row++) {
    matriz.push([]);

    for (let column = 0; column < number; column++) {
      matriz[row].push(auxCounter++);
    }
  }

  return matriz;
}

console.log(generateMatriz(4));
console.log(generateMatriz(3));
