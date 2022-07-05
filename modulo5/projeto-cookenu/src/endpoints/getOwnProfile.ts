import { Request, Response } from "express"
import UserDB from "../data/UserDB"
import { Authenticator } from "../services/Authenticator"

export const getOwnProfile = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {
    
    //pega o token passado no header
    const token = req.headers.authorization as string

    if (!token) {
      errorCode = 401
      throw new Error("Não autorizado. O endpoint precisa receber um token.")
    }

    //pega os dados do token
    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    //passa o id do token para a função com a query do banco de dados
    const userDB = new UserDB()
    const user = await userDB.selectUserById(tokenData.id)

    res.status(200).send({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail()
    })


  } catch (error: any) {
    res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
  }
}