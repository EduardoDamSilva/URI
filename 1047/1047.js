var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

const horaInicio = Number(lines.shift())
const minutoInicio = Number(lines.shift())
const horaFinal = Number(lines.shift())
const minutoFinal = Number(lines.shift())
var duracaoHora = 0
var duracaoMinuto = 0
if (horaInicio > horaFinal){
  duracaoHora = (24 - horaInicio) + horaFinal
  duracaoMinuto = minutoInicio - minutoFinal
} else if (horaFinal > horaInicio) {
  duracaoHora = horaFinal - horaInicio
  duracaoMinuto = minutoInicio - minutoFinal
} else {
  duracaoHora = 24
}

console.log(`O JOGO DUROU ${duracaoHora} HORA(S) E ${duracaoMinuto} MINUTO(S)`)