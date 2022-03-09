/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// const boasVindas = console.log("Boas vindas ao jogo de Blackjack!")

// if(confirm("Quer iniciar uma nova rodada?")) {

//    const carta1Usuario = comprarCarta()   // Sorteia uma carta para o usuário
//    const carta2Usuario = comprarCarta()
//    const carta1Computador = comprarCarta()     // Sorteia uma carta para o computador
//    const carta2Computador = comprarCarta()

//    const somaUsuario = carta1Usuario.valor + carta2Usuario.valor  //guarda a soma em variável
//    const somaComputador = carta1Computador.valor + carta2Computador.valor

//    console.log(`Usuário - Cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação ${somaUsuario}`)
//    console.log(`Computador - Cartas: ${carta1Computador.texto} ${carta2Computador.texto} - pontuação ${somaComputador}`)

//    if (somaUsuario === somaComputador) {
//       console.log("Empate!")
//    }
//    else if (somaUsuario > somaComputador) {
//       console.log("O usuário ganhou!!!")
//    }
//    else {
//       console.log("O computador ganhou!!!")
//    }

// }
// else {
//    console.log("O jogo acabou.")
// }