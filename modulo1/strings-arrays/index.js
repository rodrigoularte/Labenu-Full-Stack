// Exercícios de interpretação de código

//1.
// let array
// console.log('a. ', array)    // a. undefined     array não foi definido

// array = null
// console.log('b. ', array)    // b. null      array nulo

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)     // c. 11       imprime a quantidade de itens no array

// let i = 0
// console.log('d. ', array[i])         // d. 3      array[0] - imprime o item que está no índice 0

// array[i+1] = 19                      // array[0+1] = 19     então: array[1] = 19        substitui o item no índice 1 por 19
// console.log('e. ', array)            // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]             // array[0+6] = array[6]
// console.log('f. ', valor)            // f. 9        imprime o item que está no índice 6


//2.
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)     //"SUBI NUM ÔNIBUS EM MIRROCOS" 27

// primeiro vai rodar toUpperCase: "SUBI NUM ÔNIBUS EM MARROCOS"
// depois vai rodar replaceAll: "SUBI NUM ÔNIBUS EM MIRROCOS"
// depois vai contar a quantidade de caracteres
// Vai imprimir tudo maiúsculo, trocar A por I e imprimir o número de caracteres da frase



//Exercícios de escrita de código


//1.
// const nomeUsuario = prompt("Digite o seu nome:")
// const email = prompt("Digite o seu e-mail:")

// const resposta = `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`

// console.log(resposta)


//2.
// //a) array com as 5 comidas
// const comidasPreferidas = ["Batata-frita", "Pizza", "Hambúrguer", "Pastel", "Bolo de pote"]

// console.log('a)', comidasPreferidas)

// //b) array com as 5 comidas pulando linhas
// console.log('b) Essas são as minhas comidas preferidas:')
// console.log(comidasPreferidas[0])
// console.log(comidasPreferidas[1])
// console.log(comidasPreferidas[2])
// console.log(comidasPreferidas[3])
// console.log(comidasPreferidas[4])

// //c) substitui "Pizza" pela resposta do usuário
// const comidaUsuario = prompt("Digite a sua comida preferida:")
// comidasPreferidas[1] = comidaUsuario

// console.log('c)', comidasPreferidas)


//3.
// //a) array vazio
// let listaDeTarefas = []

// //b) adicionando 3 tarefas
// let TarefaUm = prompt("Digite a primeira tarefa a ser realizada hoje:")
// let TarefaDois = prompt("Digite a segunda tarefa a ser realizada hoje:")
// let TarefaTres = prompt("Digite a terceira tarefa a ser realizada hoje:")

// listaDeTarefas.push(TarefaUm, TarefaDois, TarefaTres)

// //c) imprime o array, agora com as 3 tarefas
// console.log(listaDeTarefas)

// //d) removendo a tarefa
// let indiceTarefa = prompt("Digite o índice da tarefa que já realizou para removê-la:") - 1

// removerTarefa = listaDeTarefas.splice(indiceTarefa, 1)

// //e) array com a tarefa removida
// console.log(listaDeTarefas)