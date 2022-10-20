var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const valor = Number(lines.shift());

if(valor < 0 || valor > 100){
  console.log("Fora de intervalo")
} else if (valor >= 0 && valor <= 25){
  console.log("Intervalo [0,25]")
} else if (valor > 25 && valor <= 50){
  console.log("Intervalo (25,50]")
} else if (valor > 50 && valor <= 75){
  console.log("Intervalo (50,75]")
} else {
  console.log("Intervalo (75,100]")
}
