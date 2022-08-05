import express from "express"
import cors from "cors"
import { User, users, UserType } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("O servidor está rodando em http://localhost:3003")
})


//Exercício 1
//a) GET
//b) /users
// app.get("/users", (req,res) => {
//   res.send(users)
// })


//Exercício 2
//a) Usei path parameters
app.get("/users/:type", (req, res) => {
  let errorCode: number = 500
  try {
    const type: string = req.params.type

    const usersByType: User[] = users.filter((user) => {
      return user.type === type
    })

    if (usersByType.length === 0) {
      errorCode = 422
      throw new Error("O type só aceita as strings 'ADMIN' ou 'NORMAL'")
    } else {
      res.send(usersByType)
    }

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})


//Exercício 3
//a) path params ou query params
app.get("/users", (req, res) => {
  let errorCode: number = 500
  try {
    const name: string = req.query.name as string
    const user: User | undefined = users.find((user) => user.name === name)

    if (!user) {
      errorCode = 404
      throw new Error("Usuário não encontrado")
    }

    res.status(200).send(user)

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})

//Exercício 4
//a) Mesmo mudando para PUT, ainda continua criando novos usuários
//b) Não é apropriado, pois o PUT deve somente modificar e não criar
app.post("/users", (req, res) => {
  let errorCode: number = 500
  try {
    const { name, email, type, age } = req.body
  
    const newUser: User = {
      id: Date.now(),
      name,
      email,
      type,
      age
    }

    if(typeof name !== "string" || !name) {
      errorCode = 422
      throw new Error("Name deve ser do tipo string e não pode ficar vazio")
    }

    if(typeof email !== "string" || !email) {
      errorCode = 422
      throw new Error("Email deve ser do tipo string e não pode ficar vazio")
    }

    if(type !== UserType.ADMIN && type !== UserType.NORMAL) {
      errorCode = 422
      throw new Error("Type só aceita as strings 'ADMIN' ou 'NORMAL' e não pode ficar vazio")
    }

    if(isNaN(age) || age <= 0) {
      errorCode = 422
      throw new Error("Age deve ser do tipo number e não pode ser menor ou igual a 0")
    }
      
    users.push(newUser)
  
    res.status(201).send(users)
    
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})


//Exercício 5
app.put("/users/:id", (req,res) => {
  let errorCode: number = 500
  try {
    const id: number = Number(req.params.id)
    // const {name} = req.body

    // if(typeof name !== "string" || !name) {
    //   errorCode = 422
    //   throw new Error("Name deve ser do tipo string e não pode ficar vazio")
    // }

    const userIndex = users.findIndex(user => user.id === id)

    if(userIndex < 0) {
      errorCode = 404
      throw new Error("Usuário não encontrado")
    }

    else {
      users[userIndex].name = `${users[userIndex].name}-ALTERADO`
      res.status(200).send(users)
    }

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})