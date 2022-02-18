// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
    altura = prompt("Digite a altura do retângulo")
    largura = prompt("Digite a largura do retângulo")
  
    area = altura * largura

    console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
    const anoAtual = prompt("Digite o ano atual:")
    const anoNascimento = prompt("Digite o ano do seu nascimento:")

    const idade = anoAtual - anoNascimento
    
    console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome:")
  const idade = prompt("Digite seua idade:")
  const email = prompt("Digite seu email:")

  const resposta = console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corUm = prompt("Digite sua primeira cor favorita:")
  const corDois = prompt("Digite sua segunda cor favorita:")
  const corTres = prompt("Digite sua terceira cor favorita:")

  const coresFavoritas = [corUm, corDois, corTres]

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
   return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array [0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array [array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let inverter = array [array.length -1]

  array [array.length -1] = array [0]
  array [0] = inverter
  
  return array
}
//teste 11
let testeInverter = ["ola","abc","rodrigo"]
console.log(trocaPrimeiroEUltimo(testeInverter))

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()
}
// teste 12
console.log(checaIgualdadeDesconsiderandoCase("RodRigO","rodRigo"))
console.log(checaIgualdadeDesconsiderandoCase("RodRigO-10","rodRigo"))

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Digite o ano em que estamos:")
  let anoNascimento = prompt("Digite seu ano de nascimento:")
  let anoEmitida = prompt("Digite o ano em que seu RG foi emitido:")

  let idadePessoa = anoAtual - anoNascimento
  let tempoRg = anoAtual - anoEmitida

  let caso1 = idadePessoa <= 20 && tempoRg >= 5
  let caso2 = idadePessoa > 20 && idadePessoa <= 50 && tempoRg >= 10
  let caso3 = idadePessoa > 50 && tempoRg >= 15

  console.log(caso1 || caso2 || caso3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}