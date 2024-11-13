// Questão 2 (Operators):
let number1 = Number(prompt("Coloque um numero: "));
let number2 = Number(prompt("Coloque um numero: "));

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);
console.log(2 ** 3);
console.log(144 ** (1 / 2));

// Questão 4 (Data Manipulation):

const Namehorse = ["DINASTIA APOLLO ROXO","POKER MOON HJS","LET APOLLO SILVER"];

Namehorse.push("REI BIG DOG");
Namehorse.unshift("HOLLAND JACK");

console.log(Namehorse);



// Questão 6 (while):

let count = 0;

while (count < 100) {
    count +=1;
    if (count >= 40 && count <= 69) {
        continue;
    }
    console.log(count)
}


// Questão 7 (if):
const driver = Number(prompt("Coloque a velocidade percorrida pelo Morista: "));

if (driver > 60) {
    console.log("O motorista é multado por cuasa da alta velocidade. ");
} 
else if (driver < 60) {
    console.log("O motorista é multado por cuasa da baixa velocidade. ");
}
else {
    console.log("O motorista estar com uma velocidade boa. ");
}