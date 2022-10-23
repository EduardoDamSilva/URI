var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

const comida = Number(lines.shift())
const quantidade = Number(lines.shift())

var precoTotal = 0
if(comida == 1){
  precoTotal = 4 * quantidade
} else if (comida == 2){
  precoTotal = 4.5 * quantidade
} else if (comida == 3){
  precoTotal = 5 * quantidade
} else if (comida == 4){
  precoTotal = 2 * quantidade
} else {
  precoTotal = 1.5 * quantidade 
}

console.log(`Total: R$ ${precoTotal.toFixed(2)}`)

