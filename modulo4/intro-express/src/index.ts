import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("O servidor está rodando em http://localhost:3003")
})


//Exercício 1
app.get("/", (req, res) => {
  res.send("Está funcionando")
})


//Exercício 2
type Usuario = {
  id: number,
  name: string,
  phone: string,
  email: string,
  website: string
}


//Exercício 3
const listaDeUsuarios: Usuario[] = [
  {
    id: 1,
    name: "Diego Alves",
    phone: "(21) 98754-5487",
    email: "diegoalves@flamengo.com.br",
    website: "diegoalves.com"
  },
  {
    id: 9,
    name: "Gabriel Barbosa",
    phone: "(21) 92356-6532",
    email: "gabigol@flamengo.com.br",
    website: "gabigol.com"
  },
  {
    id: 27,
    name: "Bruno Henrique",
    phone: "(21) 99865-6598",
    email: "bh27@flamengo.com.br",
    website: "brunohenrique.com"
  }
]


//Exercício 4
app.get("/usuarios", (req, res) => {
  res.send(listaDeUsuarios)
})


//Exercício 5
type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}


//Exercício 6
// Acho melhor criar fora para não ter um array dentro de outro array
const listaDePosts: Post[] = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    userId: 9,
    id: 1,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    userId: 9,
    id: 2,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    userId: 27,
    id: 1,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  }
]


//Exercício 7
app.get("/posts", (req, res) => {
  res.send(listaDePosts)
})


//Exercício 8
app.get("/posts/:userId", (req, res) => {
  const userId = parseInt(req.params.userId)

  const posts = listaDePosts.filter((user) => {
    return (user.userId === userId)
  })
  res.send(posts)
})