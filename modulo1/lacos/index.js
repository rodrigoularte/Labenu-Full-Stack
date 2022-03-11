// Exercícios de interpretação de código


//1.
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// o código cria um laço for que contém uma variável i declarada com valor igual a 0.
// Dentro do for, a variável i incrementa 1 enquanto i for menor do que 5.
// Depois disso, a variável valor incrementa o número que estiver na variável i
// Portanto: quando i=0, valor=0; i=1, valor=1; i=2, valor=3, pois valor era 1 e incrementou
// 2, logo 2+1=3; e segue esse fluxo até i=5.
// quando o loop termina, imprime no console: 10


//2.
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a) Vai imprimir todos os números do array que são maiores do que 18.

//b) Podemos usar o indexOf() dentro do for deste modo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//    console.log(`O número ${numero} tem índice ${lista.indexOf(numero)} no array`)
// }


//3.
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// É um programa que vai incrementando um asterisco linha por linha, até chegar
// à linha que o usuário digitou no prompt
// O console vai imprimir:
// *
// **
// ***
// ****


// Exercícios de escrita de código

//1.
// const quantidadePet = Number(prompt("Quantos bichinhos de estimação você tem?"))
// let i = 0
// let arrayPets = [ ]

// if (quantidadePet > 0) {

//     while (i < quantidadePet){
//         let nomePet = prompt("Digite o nome do seu pet:")
//         arrayPets.push(nomePet)

//         i++
//     }
//     console.log(arrayPets)
// }
// else{
//     console.log("Que pena! Você pode adotar um pet!")
// }


//2. Considere que você tenha acesso a um `array` (chamado de 'array original')
// que é composto somente de números. Baseando-se nisso, crie uma função para cada um
// dos itens abaixo, realizando as operações pedidas:

// let arrayOriginal = [10, 39, 8, 25, 81, 29]

// a) Escreva um programa que **imprime** cada um dos valores do array original.

// for (let i = 0; i < arrayOriginal.length; i++ ) {
//     console.log(arrayOriginal[i])
// }


// b) Escreva um programa que **imprime** cada um dos valores do array original
// divididos por 10

// for (let i = 0; i < arrayOriginal.length; i++ ) {
//     console.log(arrayOriginal[i] / 10)
// }
    
// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares
// do array original e **imprima** esse novo array

// let arrayNumerosPares = [ ]

// for (let i = 0; i < arrayOriginal.length; i++ ) {
//     if (arrayOriginal[i] % 2 === 0){
//         arrayNumerosPares.push(arrayOriginal[i])
//     }
// }
// console.log(arrayNumerosPares)
    

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma:
// "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// let arrayDeStrings = [ ]

// for (let numero of arrayOriginal) {
//     let string = `O elemento do índex ${arrayOriginal.indexOf(numero)} é: ${numero}`
//     arrayDeStrings.push(string)
// }
// console.log(arrayDeStrings)


// e) Escreva um programa que imprima no console o maior e o menor números contidos
// no array original

// let valorMinimo = 100
// let valorMaximo = 0

// for (let i = 0; i < arrayOriginal.length; i++) {
//     if (arrayOriginal[i] > valorMaximo){
//         valorMaximo = arrayOriginal[i]
//     }
// }

// for (let i = 0; i < arrayOriginal.length; i++) {
//     if (arrayOriginal[i] < valorMinimo){
//         valorMinimo = arrayOriginal[i]
//     }
// }

// console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)


//Desafios

//1.

// const numeroParaAdivinhar = Number(prompt("Vamos jogar!"))
// let chute = 0
// let numerosDeChute = 0

// while (chute !== numeroParaAdivinhar){
//     chute = Number(prompt("Tente acertar o número do seu adversário!"))

//     console.log("O número chutado foi", chute)

//     if (chute > numeroParaAdivinhar){
//         console.log("Errrrrrrrouuuu!!! O número é menor")
//     }
//     else if (chute < numeroParaAdivinhar) {
//         console.log("Errrrrrrrouuuu!!! O número é maior")
//     }
//     else {
//         console.log("Acertouuuu!!!")
//     }

//     numerosDeChute++
// }

// if (numerosDeChute === 1){
//     console.log("Caraca, tu é bom mesmo, hein!! Acertou de primeira!!")
// }
// else if (numerosDeChute < 5){
// console.log("Foi rápido! O número de tentativas foi", numerosDeChute)
// }
// else {
// console.log("Sofreu, mas conseguiu! O número de tentativas foi", numerosDeChute)
// }


//2.

// let numeroParaAdivinhar = Math.floor((Math.random() * 100) + 1)
// let chute = 0
// let numerosDeChute = 0

// while (chute !== numeroParaAdivinhar){
//     chute = Number(prompt("Tente acertar o número do seu adversário!"))

//     console.log("O número chutado foi", chute)

//     if (chute > numeroParaAdivinhar){
//         console.log("Errrrrrrrouuuu!!! O número é menor")
//     }
//     else if (chute < numeroParaAdivinhar) {
//         console.log("Errrrrrrrouuuu!!! O número é maior")
//     }
//     else {
//         console.log("Acertouuuu!!!")
//     }

//     numerosDeChute++
// }

// if (numerosDeChute === 1){
//     console.log("Caraca, tu é bom mesmo hein!! Acertou de primeira!!")
// }
// else if (numerosDeChute <= 5){
// console.log("Foi rápido! O número de tentativas foi", numerosDeChute)
// }
// else {
// console.log("Sofreu, mas conseguiu! O número de tentativas foi", numerosDeChute)
// }

// Quando eu entendi como era pra usar o Math.random(), eu vi que era
// só substituir a linha com o prompt que pedia para o usuário digitar o número
// a ser adivinhado. Alterei e deu certo!