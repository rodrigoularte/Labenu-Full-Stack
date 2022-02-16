// interpretação de código

// 1.
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2        //=true

// let resultado = bool1 && bool2

// console.log("a. ", resultado)       //imprime: a. false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado)       //imprime: b. false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)       //imprime: c. true

// console.log("d. ", typeof resultado)        //imprime: d. boolean



// 2.
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)       //o console vai receber a variavel como string, aí não vai acontecer a soma



//3.
//deveria ser: const soma = Number(primeiroNumero) + Number(segundoNumero)



// escrita de código

// 1.
// let idadeUser = prompt("Digite sua idade:")
// let idadeAmigo = prompt("Digite a idade do(a) seu/sua melhor amigo(a)")

// let diferenca = Number(idadeUser) > Number(idadeAmigo)
// let subtracao = Number(idadeUser) - Number(idadeAmigo)

// console.log("Sua idade é maior do que a do seu melhor amigo?", diferenca)
// console.log("A diferença de idade é:", subtracao, "anos.")



// 2.
// let par = prompt("Insira um número par:")

// let resultado = Number(par) % 2

// console.log("O resto da divisão de", par, "por 2 é:", resultado)

// sempre resta 0 quando números pares são divididos por 2
// sempre resta 1 quando números ímpares são divididos por 2



// 3.
// let idade = prompt("Digite sua idade:")

// let meses = Number(idade) * 12
// let dias = Number(idade) * 365
// let horas = Number(idade) * 365 * 24

// console.log("Você tem", meses, "meses de vida")
// console.log("Você tem", dias, "dias de vida")
// console.log("Você tem", horas, "horas de vida")



// 4.
// let numUm = prompt("Digite o primeiro número:")
// let numDois = prompt("Digite o segundo número:")

// console.log(numUm, "dividido por", numDois)
// console.log("O primeiro numero é maior que segundo?", Number(numUm) > Number(numDois))
// console.log("O primeiro numero é igual ao segundo?", Number(numUm) === Number(numDois))
// console.log("O primeiro numero é divisível pelo segundo?", (Number(numUm) % Number(numDois)) === 0)
// console.log("O segundo numero é divisível pelo primeiro?", (Number(numDois) % Number(numUm)) === 0)