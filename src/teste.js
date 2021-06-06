const data = require('./data');

function increasePrices(numero) {
  const obj = {};
  const chaves = Object.keys(data.prices);
  const valores = Object.values(data.prices);
  chaves.forEach((valor, index) => {

    obj[valor] = valores[index] * numero / 100 + valores[index];
  });
  return obj;
}


console.log(increasePrices(50))