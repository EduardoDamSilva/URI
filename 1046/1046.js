var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

const horaInicio = Number(lines.shift())
const horaFinal = Number(lines.shift())
var duracao = 0
if (horaInicio > horaFinal){
  duracao = (24 - horaInicio) + horaFinal
} else if (horaFinal > horaInicio) {
  duracao = horaFinal - horaInicio
} else {
  duracao = 24
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`)