import express from "express"
import cors from "cors"
import { Transaction, User, users } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("O servidor está rodando em http://localhost:3003")
})

//Crie um método GET na entidade users função que será responsável por pegar todos os usuários existentes no array de usuários.
app.get("/users", (req,res) => {
    res.send(users)
})


//Crie um endpoint  que utilize o método POST da entidade users que será responsável por cadastrar um usuário em um array de usuários. Neste momento, não se preocupe, com as validações descritas nas funcionalidades.
app.post("/users", (req, res) => {
  let errorCode: number = 500
  try {
    const { name, cpf, birthDate } = req.body

    const checkAge = (birth: string): void => {
      const currentDate = new Date()

      const [day, month, year] = birth.split("/")

      let age = currentDate.getFullYear() - Number(year)
      if( (currentDate.getMonth() + 1) < Number(month)
          ||
          (currentDate.getMonth() + 1 === Number(month)
            &&
           currentDate.getDate() < Number(day))
          )
        { age-- }

      if(age < 18) {
        errorCode = 422
        throw new Error("User must be over 18 years old to open an account.")
      }
    }

    checkAge(birthDate)

    //verifica se o CPF passado já não está atrelado a alguma conta existente
    const userIndex = users.findIndex(user => user.cpf === cpf)

    if(userIndex < 0) {
      const newUser: User = {
        name,
        cpf,
        birthDate,
        balance: 0,
        statement: []
      }
  
      users.push(newUser)
      
      res.status(201).send("Account created successfully")
    } else {
      errorCode = 409
      throw new Error("CPF already registered.")
    }

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})


//Crie um endpoint get que receba um CPF como parâmetro e retorne o saldo da conta do usuário dono daquele CPF. A informação deve ser igual ao que estiver salvo no sistema. Se for diferente, exiba uma mensagem de erro.
app.get("/users/:cpf", (req,res) => {
  let errorCode: number = 500
  try {
    const cpf: string = req.params.cpf

    const userIndex = users.findIndex(user => user.cpf === cpf)
    
    if(userIndex < 0) {
      errorCode = 404
      throw new Error("User not found. Invalid CPF.")
    } else {
      res.status(200).send({balance: users[userIndex].balance})
    }

    
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})


//Altere o endpoint de adicionar saldo para que ela adicione um item ao extrato da conta do usuário: indicando o valor e a data da transação. A descrição para este tipo de item deve ser sempre a mesma ("Depósito de dinheiro"). A data pode ser salva como timestamp ou string.
app.put("/users", (req,res) => {
  let errorCode: number = 500
  try {
    const {name, cpf, value} = req.body

    if(typeof value !== "number") {
      throw new Error("Value is not a number.")

    }

    const userIndex = users.findIndex(user => user.cpf === cpf && user.name === name)
    
    if(userIndex < 0) {
      errorCode = 404
      throw new Error("User not found. Invalid name or CPF.")
    } else {
      const currentDate = new Date()
      const date = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`
      const newBalance: number = users[userIndex].balance + value
      
      const newTransaction: Transaction = {
        value,
        date,
        description: "Depósito de dinheiro"
      }
      
      users[userIndex].balance = newBalance
      users[userIndex].statement.push(newTransaction)

      res.status(200).send({message: "Transaction completed"})
    }

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
    
  }
})