let aluno = prompt("Adicione o nome do aluno");
let nota1 = prompt("insira a nota da disciplina de Math")
let nota2 = prompt("insira a nota da disciplina de Chemestry")
let nota3 = prompt("insira a nota da disciplina de Gym")
let nota4 = prompt("insira a nota da disciplina de Bio")
let nota5 = prompt("insira a nota da disciplina de History")

let soma = (nota1+nota2+nota3+nota4+nota5)/5

if (soma >=10 ) {
  alert("aluno aprovado")
} else {
  alert("aluno reprovado")
}