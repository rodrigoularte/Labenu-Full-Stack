// Exercícios de interpretação de código

//1.
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
//}

// a) Explique o que o código faz. Qual o teste que ele realiza?
/* O código pede para o usuário digitar um numero. Esse número
   vai ser reconhecido como string, então a variavel numero transforma
   a string em numero.
   Se o numero for dividido por 2 e sobrar 0 no resto, vai imprimir
   "Passou no teste."
   Se o resto for diferente de 0, vai imprimir "Não passou no teste."*/

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Para números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Para números ímpares


//2.
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
/* O usuário vai digitar o nome de uma fruta e vai receber no console
   o preço correspondente da fruta que digitou*/

// b) Qual será a mensagem impressa no console, se o valor de fruta for`"Maçã"?
// O preço da fruta Maçã é R$ 2.25

/* c) Considere que um usuário queira comprar uma `Pêra`, qual seria a
mensagem impressa no console se retirássemos o `break` que está logo acima
do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?*/
// O preço da fruta Pêra é R$ 5


//3.
// const numero = Number(prompt("Digite o primeiro número."))

// if (numero > 0) {
//     console.log("Esse número passou no teste")
//     let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a)
/* Está pedindo para o usuário digitar um número, e como o prompt retorna
   uma string, o Number() transforma a string em number */

//b)
// se digitar 10: Esse número passou no teste
// se digitar -10: vai dar erro

//c)
/* vai aparecer um erro porque a variável 'mensagem' foi declarada
   dentro do if, ou seja, é uma variável do escopo local. E como a variável
   foi chamada fora do if, no escopo global, o programa entende que a
   variável não foi declarada*/


// Exercícios de escrita de código

//1.
// //a)
// const respostaUsuario = prompt("Digite a sua idade:")

// //b)
// const idade = Number(respostaUsuario)

// //c)
// if (idade >= 18) {
//     console.log("Você pode dirigir.")
// }
// else {
//     console.log("Você não pode dirigir.")
// }


//2.
// const resposta = prompt("Em que turno você estuda?\nDigite: 'M' para Matutino, 'V' para Vespertino ou 'N' para Noturno")

// if (resposta === "M") {
//     console.log("Bom Dia!")
// }
// else if (resposta === "V") {
//     console.log("Boa Tarde!")
// }
// else {
//     console.log("Boa Noite!")
// }


//3.
// const resposta = prompt("Em que turno você estuda?\nDigite: 'M' para Matutino, 'V' para Vespertino ou 'N' para Noturno")

// switch (resposta) {
//     case "M":
//         console.log("Bom Dia!")
//         break
//     case "V":
//         console.log("Boa Tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("Por favor, digite M, V ou N")
//         break
// }


//4.
// const generoFilme = prompt("Qual o gênero do filme?")
// const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

// if (generoFilme === "fantasia" && precoIngresso < 15) {
//     console.log("Bom filme!")
// }
// else {
//     console.log("Escolha outro filme :(")
// }


// Desafios

//1.
// const generoFilme = prompt("Qual o gênero do filme?")
// const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

// if (generoFilme === "fantasia" && precoIngresso < 15) {
//     const lanchinho = prompt("Qual lanchinho você vai comprar?")
    
//     console.log("Bom filme!")
//     console.log(`Aproveite o(a) seu(sua) ${lanchinho}`)
//     }
// else {
//     console.log("Escolha outro filme :(")
// }


//2.
// const nomeCompleto = prompt("Digite seu nome completo:")
// const tipoDeJogo = prompt("Digite:\n'IN' para jogo internacional\n'DO' para jogo doméstico:")
// const etapaDoJogo = prompt("Digite:\n'SF' para semifinal\n'DT' para decisão de terceiro lugar\n'FI' para final ")
// const categoria = Number(prompt("Digite a categoria: (1, 2, 3 ou 4)"))
// const quantidadeIngresso = prompt("Digite quantos ingressos deseja comprar:")

// switch (tipoDeJogo) {
//     case "DO":
//         switch (etapaDoJogo) {
//             case "SF":
//                 switch (categoria) {                    
//                     case 1:                        
//                         const valorIngresso = 1320.00
//                     break
//                     case 2: 
//                         const valorIngresso = 880.00
//                     break
//                     case 3:
//                         const valorIngresso = 550.00
//                     break
//                     case 4:
//                         const valorIngresso = 220.00
//                     break
//                 }
//         }
// }

