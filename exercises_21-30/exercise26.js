/* 
Enunciado Ejercicio 26:
Optimizar el gasto en mi gasolinera favorita.
 
Tiene dos opciones:
 
- Gasolina individual: Cuesta 10 euros por cada llenado.
- Tarjeta de socio: Cuesta 90 euros anuales pero cada vez que llenas 
te cuesta 8.2 euros el tanque pagas sólo el 78% del precio del llenado.
 
Cada vez que llenas el tanque, se paga el 78% del precio 
del llenado que pagaste la última vez hasta llegar a un descuento maximo
del 50%. Acumula el descuento (0.78 ** 3).
 
Hacer una función que, al pasarle las veces que voy a llenar el tanque, 
me diga si vale la pena comprar la tarjeta de socio o no.
 
Ejemplos:
deboSerSocio(15);
 
Devuelve: 
Como usuario casual te sale a: 150        
Como socio te sale a: 154.68487999999994 
No te sale a cuenta ser socio ser socio  
*/

function bePartner(timesOfFillGas) {
  // calculate individual fill
  const oneFill = 10 * timesOfFillGas;

  // calculate fill as a partner
  let fillPartner = 90;

  // calculate total price as a partner
  for (let i = 1; i <= timesOfFillGas; i++) {
    // calculate discount
    let discount = 0.78 ** i;

    if (discount <= 0.5) {
      discount = 0.5;
    }

    fillPartner += 8.2 * discount;
  }

  return `As a casual user, you have to pay: ${oneFill}\nAs a partner, you have to pay ${parseFloat(
    fillPartner.toFixed(2)
  )}\n${
    oneFill < parseFloat(fillPartner.toFixed(2))
      ? "Be a partner isn't for you\n"
      : "Be a partner is for you!\n"
  }`;
}

console.log(bePartner(15));
console.log(bePartner(19));
