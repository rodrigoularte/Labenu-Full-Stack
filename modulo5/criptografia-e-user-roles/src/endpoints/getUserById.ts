import { Request, Response } from "express"
import { selectUserById } from "../data/UserDB"
import { getTokenData } from "../services/getTokenData"
import { AuthenticationData } from "../types"


export const getUserById = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {

    const token = req.headers.authorization as string

    if (!token) {
      errorCode = 401
      throw new Error("Não autorizado")
    }

    const authenticationData = getTokenData(token)

    const user = await selectUserById(authenticationData.id)

    res.status(200).send({
      id: user.id,
      email: user.email
    })

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
  }
}