var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

/* Verificação de qual número é maior */
const n1 = Number(lines[0])
const n2 = Number(lines[1])
const n3 = Number(lines[2])
var A = 0
var B = 0
var C = 0
if(n1 >= n2 && n1 >= n3){
     A = n1
     B = n2
     C = n3
}
else if(n2 >= n1 && n2 >= n3){
     A = n2
     B = n1
     C = n3

}
else if(n3 >= n1 && n3 >= n2){
     A = n3
     B = n1
     C = n2
}

/* Classificando o triângulo */
if (A >= B + C){
  console.log("NAO FORMA TRIANGULO")
} else {
  if (A * A == B * B + C * C){
    console.log("TRIANGULO RETANGULO")
  }
  
  if ((A * A) > (B * B + C * C)){
    console.log("TRIANGULO OBTUSANGULO")
  }
  
  if ((A * A) < (B * B + C * C)){
    console.log("TRIANGULO ACUTANGULO")
  }
  
  if (A == B && A == C && C == A) {
   console.log("TRIANGULO EQUILATERO")
  }
  
  if (A == B && A != C || A == C && A != B|| B == C && B != A){
    console.log("TRIANGULO ISOSCELES")
  }
}