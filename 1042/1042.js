var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

/* Exercicio dando ERRO! Não sei pq */
var numeroMaior = 0
var numeroInter = 0
var numeroMenor = 0
for(var i = 0; i < lines.length; i++){
  var numero = Number(lines[i])
  if(numero > numeroMaior){
    numeroMaior = numero
  } else {
    numeroMenor = numero
  }
/* Outro for para achar o numero intermediario comparando com o menor e o maior já encontrados */

  for(var j = 0; j <= 2; j++){
    numero = Number(lines[j])
    if (numero != numeroMaior && numero != numeroMenor){
      numeroInter = numero
    }
  }
}


console.log(
`${Number(numeroMaior)}
${Number(numeroInter)}
${Number(numeroMenor)}
`
)

for(var j = 0; j < lines.length; j++){
  numero = Number(lines[j])
  console.log(numero)
}





