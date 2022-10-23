var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


/* .split(" ") separa os valores por espaço retornando uma array */
/* .shift() pega o primeiro valor da array retirando ele da array */
const notas = Array.from(lines.shift().split(" "))
const nota1 = Number(notas.shift())
const nota2 = Number(notas.shift())
const nota3 = Number(notas.shift())
const nota4 = Number(notas.shift())
 

const media = (nota1 * 2 + nota2 * 3 + nota3 * 4 + nota4 * 1) / 10

console.log(`Media: ${media.toFixed(1)}`)

if (media >= 7){
  console.log("Aluno aprovado.")
} else if (media < 5){
  console.log("Aluno reprovado.")
} else {
  const notaExame = Number(lines.shift())
  const mediaFinal = (media + notaExame) / 2

  console.log("Aluno em exame.")
  console.log(`Nota do exame: ${notaExame.toFixed(1)}`)

  if (mediaFinal >= 5){
    console.log("Aluno aprovado.")
  } else {
    console.log("Aluno reprovado.")
  }

  console.log(`Media final: ${mediaFinal.toFixed(1)}`)
}





