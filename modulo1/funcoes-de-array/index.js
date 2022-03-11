// Exercícios de interpretação de código

//1.
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// O console vai imprimir um objeto do array em cada linha, o índice do array em que o objeto está em cada
// linha e o array usuarios completo também em cada linha.


//2.
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

// Ele vai pegar todos os nomes que estão no array usuarios, e criar um novo array só com os nomes. 


//3.
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  // Vai criar um novo array com todos os objetos do array usuarios que não tenha o apelido "Chijo", ou seja
  // o filter vai retornar e imprimir no console só os objetos do índice 0 e 1 do array usuário, já que
  // o índice 2 tem o apelido "Chijo".



//Exercícios de escrita de código

//1.
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//a)
// const arrayNomeDogs = pets.map((pet) => {
//     return pet.nome
// })

// console.log(arrayNomeDogs)

//b)
// const arrayRacaSalsicha = pets.filter((pet) => {
//     return pet.raca === "Salsicha"
// })

// console.log(arrayRacaSalsicha)

//c)
// const arrayRacaPoodle = pets.filter((pet) => {
//     return pet.raca === "Poodle"
// })

// const arrayMensagem = arrayRacaPoodle.map((pet) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
// })

// console.log(arrayMensagem)

//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)
const arrayNomeDeItens = produtos.map((produto) => {
    return produto.nome
})
console.log(arrayNomeDeItens)


//b)
const arrayDeDesconto = produtos.map((produto) => {
    const desconto = produto.preco - (produto.preco * 0.05) 
    return { nome: produto.nome, preco: desconto.toFixed(2)}
})
console.log(arrayDeDesconto)


//c)
const arrayDeBebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})
console.log(arrayDeBebidas)


//d)
const arrayYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
})
console.log(arrayYpe)


//e)
const arrayCompreYpe = arrayYpe.map((produto) => {
    return `Compre ${produto.nome} por R$${produto.preco.toFixed(2)} `
})
console.log(arrayCompreYpe)