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


    const newUser: User = {
      name,
      cpf,
      birthDate,
      balance: 0,
      statement: []
    }

    users.push(newUser)
    
    res.status(201).send("Account created successfully")
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})