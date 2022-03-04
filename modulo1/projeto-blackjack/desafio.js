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
// let cartasUsuario = []
// let cartasComputador = []

// if (confirm("Boas vindas ao jogo de Blackjack!\nQuer iniciar uma nova rodada?")) {

//    let temDoisAses = true

//    while (temDoisAses) {
//       cartasUsuario.push(comprarCarta())
//       cartasUsuario.push(comprarCarta())
//       cartasComputador.push(comprarCarta())
//       cartasComputador.push(comprarCarta())

//       if ((cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11) ||
//          (cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11)) {
//          cartasUsuario = []
//          cartasComputador = []
//       }
//       else {
//          temDoisAses = false
//       }
//    }

//    if (confirm(`Suas cartas são: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto}.` + `\n` +
//       `A carta revelada do computador é ${cartasComputador[0].texto}` + `\n` +
//       `Deseja comprar mais uma carta?`)) {

//          cartasUsuario.push(comprarCarta())

//          if (confirm(`Suas cartas são: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} ${cartasUsuario[2].texto}.` + `\n` +
//          `A carta revelada do computador é ${cartasComputador[0].texto}` + `\n` +
//          `Deseja comprar mais uma carta?`)) {

//          }
//    }
//    else {
//       // é a vez do computador
//    }


// }
// else {
//    alert("O jogo acabou.")
// }