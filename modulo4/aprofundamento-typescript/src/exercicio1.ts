//a)

// const minhaString: string = 18

//O Typescript não permite atribuir um número a esta variável, pois ela só vai aceitar valor do tipo string

//b)

// const meuNumero: number = 18

//Para que esta variável aceite mais de um tipo de valor, basta usar o union type:

// const meuNumero: number | string = 18

//c)

type pessoa = {
  nome: string,
  idade: number,
  corFavorita: string
}

// const pessoa1: pessoa = {
//   nome: "Pessoa1",
//   idade: 20,
//   corFavorita: "Azul"
// }
// const pessoa2: pessoa = {
//   nome: "Pessoa2",
//   idade: 21,
//   corFavorita: "Verde"
// }
// const pessoa3: pessoa = {
//   nome: "Pessoa3",
//   idade: 22,
//   corFavorita: "Cinza"
// }

//d)
enum coresArcoIris {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta"
}

const pessoa1: pessoa = {
  nome: "Pessoa1",
  idade: 20,
  corFavorita: coresArcoIris.AZUL
}
const pessoa2: pessoa = {
  nome: "Pessoa2",
  idade: 21,
  corFavorita: coresArcoIris.VERDE
}
const pessoa3: pessoa = {
  nome: "Pessoa3",
  idade: 22,
  corFavorita: coresArcoIris.VERMELHO
}