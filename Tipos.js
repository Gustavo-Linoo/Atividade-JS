// Exercicio 1

// let idade = 14

// if (idade <= 18) {
//     alert("voce eh de meno")
// }
// else{
//     alert("voce eh de maior")
// }

// Exercicio 2

// let number = -12
// if (number >= 0) {
//     alert("é positivo")
// }
// else { 
//     alert ( "negativo")
// }

// Exercico 3 

// let nota = 61
// if (nota >=60) {
//     alert("Aprovado")
// }
// else {
//     alert ("reprovado")
// }

// Exercicio 4

// Pede um número ao usuário
// let numero = Number(prompt("Digite um número:"));

// // Verifica se o número é positivo, negativo ou zero
// if (numero > 0) {
//     alert("O número é positivo.");
// } else if (numero < 0) {
//     alert("O número é negativo.");
// } else {
//     alert("O número é zero.");
// }

// Exercicio 5
// Pede a idade ao usuário
// let idade = Number(prompt("Digite sua idade:"));

// // Classifica a idade
// if (idade >= 0  idade <= 12) {
//     alert("Você é uma Criança.");
// } else if (idade >= 13 && idade <= 17) {
//     alert("Você é um Adolescente.");
// } else if (idade >= 18) {
//     alert("Você é um Adulto.");
// } else {
//     alert("Idade inválida.");
// }

//Exercicio 6

// // Pede um número ao usuário

// let number = Number(prompt("Digite um número:"));

// // Verifica se é par ou ímpar

// if (number % 2 === 0) {
//     alert("O número é par.");
// } else {
//     alert("O número é ímpar.");
// }

//Exercicio Intermediario 

// let n1 = Number(prompt("Digite o primeiro número:"));
// let n2 = Number(prompt("Digite o segundo número:"));
// let n3 = Number(prompt("Digite o terceiro número:"));

// let maior;

// if (n1 >= n2 && n1 >= n3) {
//     maior = n1;
// } else {
//     if (n2 >= n1 && n2 >= n3) {
//         maior = n2;
//     } else {
//         maior = n3;
//     }
// }

// console.log("O maior número é:", maior);

// Exercico 2 intermediario
// let valorCompra = Number(prompt("Digite o valor da compra:"));
// let valorFinal;

// if (valorCompra > 100) {
//     valorFinal = valorCompra * 0.9; // 10% de desconto
//     console.log("Desconto aplicado!");
// } else {
//     valorFinal = valorCompra;
//     console.log("Sem desconto.");
// }

// console.log("Valor final da compra: R$ " + valorFinal.toFixed(2));