// Exercícios de interpretação de código

//1.
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// imprime: Matheus Nachtergaele

// console.log(filme.elenco[filme.elenco.length - 1])  // filme.elenco[4-1] = filme.elenco[3]
// imprime: Virginia Cavendish

// console.log(filme.transmissoesHoje[2])
// imprime o objeto:
// canal: "Globo"
// horario: "14h"

//a)
// Matheus Nachtergaele
// Virginia Cavendish
// canal: "Globo"
// horario: "14h"


//2.
// const cachorro = {      //cria o objeto cachorro
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}    //copia os itens do obj cachorro e altera o nome

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}   //copia os itens do obj gato e altera "a" por "o"

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//a)
// {nome: "Juca", idade: 3, raca: "SRD"}
// {nome: "Juba", idade: 3, raca: "SRD"}
// {nome: "Jubo", idade: 3, raca: "SRD"}

//b)
// permite copiar um objeto e fazer uma alteração ou adicionar mais itens nele


//3.
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {    //cria o obj pessoa
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))   //vai retornar pessoa["backender"]
// console.log(minhaFuncao(pessoa, "altura"))      //vai retornar pessoa["altura"]


//a) O que vai ser impresso no console?
// false
// undefined

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
/*o console.log vai retornar uma propriedade do obj pessoa.
No primeiro caso, retorna a propriedade backender, que é false.
No segundo caso, retorna a propriedade altura, que não foi definida. Por isso
que retorna undefined no console*/



//Exercícios de escrita de código

//1.

//a)
// function descrevePessoa(descricao) {
//   return `Eu sou ${descricao.nome}, mas pode me chamar de: ${descricao.apelido[0]}, ${descricao.apelido[1]} ou ${descricao.apelido[2]}`
// }

//   const pessoa = {
//   nome: "Homem-Aranha",
//   apelido: ["Teioso", "Miranha", "Amigo da vizinhança"]
//   }

// descrevePessoa(pessoa)
// console.log(descrevePessoa(pessoa))

//b)
// const novaPessoa = {
//   ...pessoa,
//   apelido: ["Cabeça de teia", "Rastejador de paredes", "Vingador"]
// }

// descrevePessoa(novaPessoa)
// console.log(descrevePessoa(novaPessoa))


//2.
//a)
// const pessoa1 = {
//   nome: "Tony Starks",
//   idade: 42,
//   profissao: "Gênio, bilionário, playboy e filantropo"
// }

// const pessoa2 = {
//   nome: "Peter Parker",
//   idade: 20,
//   profissao: "estudante"
// }

//b)
// function informacoes(pessoa){
//   let informacoesPessoais = [ pessoa.nome, pessoa.nome.length , pessoa.idade, pessoa.profissao, pessoa.profissao.length ]

//   return informacoesPessoais
// }

// console.log(informacoes(pessoa1))
// console.log(informacoes(pessoa2))


//3.
//a)
// const carrinho = []

//b)
// const frutaUm = {
//   nome: "Abacaxi",
//   disponibilidade: true
// }
// const frutaDois = {
//   nome: "Abacate",
//   disponibilidade: true
// }
// const frutaTres = {
//   nome: "Morango",
//   disponibilidade: true
// }

//c)
// function recebeFruta(recebe) {
//   return carrinho.push(recebe)
// }

// recebeFruta(frutaUm)
// recebeFruta(frutaDois)
// recebeFruta(frutaTres)

// console.log(carrinho)


//desafio
//1.
// const nome = prompt("Digite seu nome:")
// const idade = prompt("Digite sua idade:")
// const profissao = prompt("Digite sua profissao")

// const objeto = {
//   nome: nome,
//   idade: idade,
//   profissao: profissao
// }

// console.log(objeto)
// console.log(typeof objeto)

//2.
// const filme1 = {
//   nome: "Homem-Aranha: Sem Volta para Casa",
//   anoDeLancamento: "2021"
// }
// const filme2 = {
//   nome: "Vingadores: Ultimato",
//   anoDeLancamento: "2019"
// }

// function compararFilmes(ano1, ano2) {
//   const comparacao1 = ano1 < ano2
//   console.log("O primeiro filme foi lançado antes do segundo?", comparacao1)

//   const comparacao2 = ano1 === ano2
//   console.log("O primeiro filme foi lançado no mesmo ano do segundo?", comparacao2)
// }

// compararFilmes(filme1.anoDeLancamento, filme2.anoDeLancamento)
