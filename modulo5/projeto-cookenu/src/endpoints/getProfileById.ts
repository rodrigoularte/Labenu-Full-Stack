import { Request, Response } from "express"
import UserDB from "../data/UserDB"
import { Authenticator } from "../services/Authenticator"

export const getProfileById = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {
    
    const id: string = req.params.id

    //pega o token passado no header
    const token = req.headers.authorization as string

    if (!token) {
      errorCode = 401
      throw new Error("Não autorizado. O endpoint precisa receber um token.")
    }

    //pega os dados do token
    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    if (!tokenData) {
      errorCode = 401
      throw new Error("Não autorizado. O token não tem permissão para acessar o banco de dados.")
    }

    //passa o id do path params para a função com a query do banco de dados
    const userDB = new UserDB()
    const user = await userDB.selectUserById(id)

    if (user === undefined) {
      errorCode = 422
      throw new Error("Id incorreto.")
    }

    res.status(200).send({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail()
    })


  } catch (error: any) {
    res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
  }
}