// Exercícios de interpretação de código

//1.
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) 10 e 50

// b) não vai aparecer nada, pois o comando que imprime no console é o console.log()


//2.
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)


// a. Explique o que essa função faz e qual é sua utilidade
//    Vai pegar o que o usuário digitou, transformar tudo em minúsculo e retornar true/false se tiver/não tiver "cenoura"

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`: true
//      ii.  `CENOURA é bom pra vista`: true
//      iii. `Cenouras crescem na terra`: true



//Exercícios de escrita de código

//1.
//a)
// function mensagem()
// {
//     console.log("Eu sou Rodrigo, tenho 29 anos, moro no Rio de Janeiro e sou aluno da Labenu.")
// }

// mensagem()


//b)
// function mensagem(nome, idade, cidade, profissao)
// {
//     return `Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissao}.`
// }

// const imprimeFrase = mensagem("Rodrigo", 29, "Rio de Janeiro", "desenvolvedor")
// console.log(imprimeFrase)


//2.
// a) 
// let numero1 = Number(prompt("Digite o primeiro número:"))
// let numero2 = Number(prompt("Digite o segundo número:"))

// function soma(n1,n2)
// {
//     return n1 + n2
// }

// const resultadoSoma = soma(numero1,numero2)
// console.log(resultadoSoma)


// b)
// let numero1 = Number(prompt("Digite o primeiro número:"))
// let numero2 = Number(prompt("Digite o segundo número:"))

// function compararNumeros(n1,n2)
// {
//     return n1 >= n2
// }

// const maiorOuIgual = compararNumeros(numero1,numero2)
// console.log(`${numero1} é maior ou igual a ${numero2}?`, maiorOuIgual)


// c)
// let numero = Number(prompt("Digite um número:"))

// function checarPar(n)
// {
//     return n % 2 === 0
// }

// let resultado = checarPar(numero)
// console.log(`O número ${numero} é par?`, resultado)


// d)
// let mensagemDigitada = prompt("Insira uma mensagem:")

// function converter(mensagem)
// {
// 	return mensagem.toUpperCase()
// }

// let resposta = converter(mensagemDigitada)
// console.log(resposta.length, resposta)


//3.

// let numero1 = Number(prompt("Digite o primeiro número:"))
// let numero2 = Number(prompt("Digite o segundo número:"))

// function somar(n1,n2){
//     return n1 + n2
// }
// function subtrair(n1,n2){
//     return n1 - n2
// }
// function multiplicar(n1,n2){
//     return n1 * n2
// }
// function dividir(n1,n2){
//     return n1 / n2
// }

// console.log(`Operações básicas com ${numero1} e ${numero2}:`)
// console.log("soma:", somar(numero1,numero2))
// console.log("subtração:", subtrair(numero1,numero2))
// console.log("multiplicação:", multiplicar(numero1,numero2))
// console.log("divisão:", dividir(numero1,numero2))