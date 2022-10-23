var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');


var numero = 0
var numeroMaior = 0
var numeroMenor = Number(lines[0])
/* Verificando qual o maior numero e o menor */
for(var i = 0; i < 2; i++){
  numero = Number(lines[i])

  if(numero > numeroMaior){
    numeroMaior = numero
  }
  for(var j = 0; j < 2; j++){
    numero = Number(lines[j])

    if (numero < numeroMenor){
      numeroMenor = numero
    }
  }
}

if (numeroMaior % numeroMenor == 0){
  console.log("Sao Multiplos")
} else {
  console.log("Nao sao Multiplos")
}






