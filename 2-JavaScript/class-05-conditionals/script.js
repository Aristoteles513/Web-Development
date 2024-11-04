const n1 = Number(prompt("Digite sua primeira Nota: "));
const n2 = Number(prompt("Digite sua segunda Nota: "));
const n3 = Number(prompt("Digite sua terceira Nota: "));
const average = (n1 + n2 + n3) / 3;

console.log("Sua Nota é: ", average);

if (average >= 7) {
    console.log("Aprovado por media!");
} 
else if (average >= 3) {
    console.log("Em Recuperação!");
}
else {
    console.log("Aluno Reprovado!");
    }