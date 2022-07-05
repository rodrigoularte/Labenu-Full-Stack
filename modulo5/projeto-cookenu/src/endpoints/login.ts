import { Request, Response } from "express"
import UserDB from "../data/UserDB"
import { Authenticator } from "../services/Authenticator"
import HashManager from "../services/HashManager"

export const login = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {
    const {email, password} = req.body

    //verifica se algum campo do body está vazio
    if(!email || !password) {
      errorCode = 422
      throw new Error("Insira corretamente as informações. Nenhum campo pode ficar vazio.")
    }

    //verifica se já existe um usuário com o email passado
    const userDB = new UserDB()
    const user = await userDB.selectUserByEmail(email)

    if(!user) {
      errorCode = 409
      throw new Error("Email incorreto.")
    }

    //compara a senha passada com a que está no banco de dados
    const hashManager = new HashManager()
    const comparePassword = await hashManager.compare(password, user.getPassword())

    if(comparePassword === false) {
      errorCode = 401
      throw new Error("Senha incorreta")
    }

    //gera o token
    const authenticator = new Authenticator
    const token = authenticator.generate({id: user.getId()})

    res.status(200).send({access_token: token})


  } catch (error: any) {
    res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
  }
}